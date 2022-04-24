import { Component, OnInit } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus, NbThemeService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { MultiSelectComponent } from './multi-select/multi-select.component';

import { NbDialogService } from '@nebular/theme';
import { ShowcaseDialogComponent } from '../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import { DialogNamePromptComponent } from '../../modal-overlays/dialog/dialog-name-prompt/dialog-name-prompt.component';
import { HttpClient } from '@angular/common/http';

import { ColDef } from 'ag-grid-community';


@Component({
  selector: 'ngx-buttons',
  styleUrls: ['./buttons.component.scss'],
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      user: {
        title: 'User Name',
        type: 'html',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select...',
            list: [{ value: 'Antonette', title: 'Antonette' }, { value: 'Bret', title: 'Bret' }, {
              value: '<b>Samantha</b>',
              title: 'Samantha',
            }],
          },
        },
      },
      button: {
        title: 'Button',
        type: 'custom',
        renderComponent: MultiSelectComponent,
      //     onComponentInitFunction(instance) {
      //     instance.save.subscribe(row => {
      //       alert(`${row.name} saved!`)
      //     });
      //   }
      },
      id: {
        title: 'Agent ID',
        type: 'number',
        addable: false,
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      username: {
        title: 'RAL',
        type: 'string',
      },
      email: {
        title: 'FAL',
        type: 'string',
      },
      age: {
        title: 'BILL',
        type: 'number',
      },
    },
  };

  dropdownList = [];
  selectedItems = [];

  dropdownSettings:IDropdownSettings;


  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];




    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  source: LocalDataSource = new LocalDataSource();


  public constructor(
    private service: SmartTableData,
    private readonly themeService: NbThemeService, 
    private dialogService: NbDialogService,
    private http: HttpClient) {

    // this.rowData = this.http.get<any[]>('https://www.ag-grid.com/example-assets/small-row-data.json');

    const data = this.service.getData();
    this.source.load(data);

    this.materialTheme$ = this.themeService.onThemeChange()
      .pipe(map(theme => {
        const themeName: string = theme?.name || '';
        return themeName.startsWith('material');
      }));

  }

  public readonly materialTheme$: Observable<boolean>;
  public readonly statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  public readonly shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  public readonly sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];

  columnDefs: ColDef[] = [
    { field: 'make', sortable: true, filter: true},
    { field: 'model' },
    { field: 'model1' },
    { field: 'model2' },
    { field: 'price' },
  ];

  rowData = [
      { make: 'Toyota', model: 'Celica', model1: 'Toyota', model2: 'Celica', price: 35000 },
      { make: 'Toyota', model: 'Celica', model1: 'Toyota', model2: 'Celica', price: 35000 },
      { make: 'Toyota', model: 'Celica', model1: 'Toyota', model2: 'Celica', price: 35000 },
      { make: 'Toyota', model: 'Celica', model1: 'Toyota', model2: 'Celica', price: 35000 },
      { make: 'Toyota', model: 'Celica', model1: 'Toyota', model2: 'Celica', price: 35000 },
      { make: 'Toyota', model: 'Celica', model1: 'Toyota', model2: 'Celica', price: 35000 },
      { make: 'Toyota', model: 'Celica', model1: 'Toyota', model2: 'Celica', price: 35000 },
      { make: 'Toyota', model: 'Celica', model1: 'Toyota', model2: 'Celica', price: 35000 },
      { make: 'Toyota', model: 'Celica', model1: 'Toyota', model2: 'Celica', price: 35000 },
      { make: 'Toyota', model: 'Celica', model1: 'Toyota', model2: 'Celica', price: 35000 },
      { make: 'Toyota', model: 'Celica', model1: 'Toyota', model2: 'Celica', price: 35000 },

    ];

    public sideBar: true;

  


  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  addItems() {
    // this.dialogService.open(MultiSelectComponent);
      // .onClose.subscribe(name => name && this.names.push(name));
  }
}
