import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';
import { AbService } from '../../@core/utils/ab.service';
import { MetadataService } from '../../@core/utils/metadata.service';

import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {

  private alive = true;
  showCallAction = true;

  solarValue: number;
  lightCard: CardSettings = {
    title: 'Light',
    iconClass: 'nb-lightbulb',
    type: 'primary',
  };
  rollerShadesCard: CardSettings = {
    title: 'Two Step Validation',
    iconClass: 'nb-roller-shades',
    type: 'success',
  };
  wirelessAudioCard: CardSettings = {
    title: 'Toogle Audio',
    iconClass: 'nb-audio',
    type: 'info',
  };
  coffeeMakerCard: CardSettings = {
    title: 'Accessibility Mode',
    iconClass: 'nb-coffee-maker',
    type: 'warning',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.lightCard,
    this.rollerShadesCard,
    this.wirelessAudioCard,
    this.coffeeMakerCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
    'material-dark': CardSettings[];
    'material-light': CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.lightCard,
        type: 'warning',
      },
      {
        ...this.rollerShadesCard,
        type: 'primary',
      },
      {
        ...this.wirelessAudioCard,
        type: 'danger',
      },
      {
        ...this.coffeeMakerCard,
        type: 'info',
      },
    ],
    dark: this.commonStatusCardsSet,
    'material-dark': this.commonStatusCardsSet,
    'material-light': this.commonStatusCardsSet,
  };

  constructor(private themeService: NbThemeService,
              private metaDataService: MetadataService,
              private solarService: SolarData,
              private abService: AbService, 
              private service: SmartTableData) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
    });

    this.solarService.getSolarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.solarValue = data;
      });

    // Table
    const data = this.service.getData();
    this.source.load(data);
  }

  ngOnInit() {
    this.metaDataService.updateTitle('Ngx-admin IoT dashboard on Angular 9+ and Nebular');
    this.metaDataService.updateDescription('IoT dashboard on Ngx-admin is Angular 9+ Bootstrap 4+ admin' +
      ' dashboard template. Over 40+ Angular Components and 60+ Usage Examples. Completely FREE and MIT licensed.');
    this.metaDataService.updateKeywords('ngx admin, ngx admin dashboard, ngx iot dashboard, ngx-admin iot template');

    this.abService.onAbEvent(AbService.VARIANT_HIDE_CALL_ACTION)
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => this.showCallAction = false );
  }

  ngOnDestroy() {
    this.alive = false;
  }

  // Table
  source: LocalDataSource = new LocalDataSource();
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

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
