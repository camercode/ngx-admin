import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  // {
  //   title: 'E-commerce',
  //   icon: 'shopping-cart-outline',
  //   link: '/pages/dashboard',
  //   home: true,
  // },
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'Contract Management',
    icon: 'folder-outline',
    children: [
      {
        title: 'Contract',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Counterparties',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Counterparties List',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Account',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Account List',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Agent',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Agent List',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Matrices',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Matrices Usage Rules',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Contract Tran. Types',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Agents Tran. Types',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Agent Signature Level',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Contract Message',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Agent Message Type',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Agent Blind Signing',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Referencial',
    icon: 'link-2-outline',
    children: [
      {
        title: 'Stepper',
        link: '/pages/layout/stepper',
      },
      {
        title: 'List',
        link: '/pages/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },
  {
    title: 'Business Operation',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Contract',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Counterparties',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Counterparties List',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Account',
        link: '/pages/forms/datepicker',
      },
      {
        title: 'Account List',
        link: '/pages/forms/datepicker',
      },
      {
        title: 'Matrices',
        link: '/pages/forms/datepicker',
      },
      {
        title: 'Matrices Usage Rules',
        link: '/pages/forms/datepicker',
      },
      {
        title: 'Contract Tran. Types',
        link: '/pages/forms/datepicker',
      },
      {
        title: 'Agents Tran. Types',
        link: '/pages/forms/datepicker',
      },
      {
        title: 'Agent Signature Level',
        link: '/pages/forms/datepicker',
      },
      {
        title: 'Contract Message',
        link: '/pages/forms/datepicker',
      },
      {
        title: 'Agent Message Type',
        link: '/pages/forms/datepicker',
      },
      {
        title: 'Agent Blind Signing',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
    title: 'Communication',
    icon: 'speaker-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Security',
    icon: 'shield-outline',
    children: [
      {
        title: 'Dialog',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/pages/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/pages/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/pages/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/pages/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Financial Solutions',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/pages/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  },
  {
    title: 'System',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Archive',
    icon: 'archive-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  // {
  //   title: 'Editors',
  //   icon: 'text-outline',
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/pages/editors/tinymce',
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: '/pages/editors/ckeditor',
  //     },
  //   ],
  // },
  // {
  //   title: 'Tables & Data',
  //   icon: 'grid-outline',
  //   children: [
  //     {
  //       title: 'Smart Table',
  //       link: '/pages/tables/smart-table',
  //     },
  //     {
  //       title: 'Tree Grid',
  //       link: '/pages/tables/tree-grid',
  //     },
  //   ],
  // },
  // {
  //   title: 'Miscellaneous',
  //   icon: 'shuffle-2-outline',
  //   children: [
  //     {
  //       title: '404',
  //       link: '/pages/miscellaneous/404',
  //     },
  //   ],
  // },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
