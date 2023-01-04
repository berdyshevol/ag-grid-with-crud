import { GridOptions } from '@ag-grid-community/core';
import { TData } from './types';
import { ColumnTypeEnum } from '../../AgGridServices';

export const columnsConfig: GridOptions<TData>['columnDefs'] = [
  { field: 'id', type: ColumnTypeEnum.primaryKey },
  {
    field: 'manufacture',
    type: [ColumnTypeEnum.text],
  },
  {
    field: 'model',
    type: [ColumnTypeEnum.text],
  },
  {
    field: 'assert_number',
    type: [ColumnTypeEnum.text],
  },
  {
    field: 'serial_number',
    type: [ColumnTypeEnum.text],
  },
  {
    field: 'ip_address',
    type: [ColumnTypeEnum.text],
  },
  {
    field: 'erp_id',
    type: [ColumnTypeEnum.text],
  },
  {
    field: 'level',
  },
  {
    field: 'coverage',
  },
  {
    field: 'yield',
    type: [ColumnTypeEnum.text],
  },
];
