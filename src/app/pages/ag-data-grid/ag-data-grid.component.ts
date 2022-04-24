import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-ag-data-grid',
  templateUrl: './ag-data-grid.component.html',
  styleUrls: ['./ag-data-grid.component.scss']
})
export class AgDataGridComponent implements OnInit {
  public rowData: any[];
  public columnDefs: (ColDef | ColGroupDef)[];
  public rowCount: string;

  public defaultColDef: ColDef;
  public components: any;
  public sideBar: false;

  public modules: Module[] = AllModules;

  public api: GridApi;
  public columnApi: ColumnApi;

  constructor() {
    this.defaultColDef = {
        resizable: true,
        sortable: true,
        filter: true,
        floatingFilter: true,
        headerComponent: 'sortableHeaderComponent',
        headerComponentParams: {
            menuIcon: 'fa-bars'
        }
    };

    this.components = {
        sortableHeaderComponent: SortableHeaderComponent,
        agDateInput: DateComponent,
        headerGroupComponent: HeaderGroupComponent,
        rendererComponent: RendererComponent
    };

    this.createRowData();
    this.createColumnDefs();
}


  ngOnInit() {
  }

}
