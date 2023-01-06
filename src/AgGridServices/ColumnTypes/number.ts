import { ColDef } from '@ag-grid-community/core';

export const number: ColDef = {
  cellClass: 'TextAligned_Right',
  filter: 'agNumberColumnFilter',
  filterParams: {
    buttons: ['clear'],
    applyMiniFilterWhileTyping: true,
  },
};
