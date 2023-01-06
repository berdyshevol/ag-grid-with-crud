import {
  BarFormatterParams,
  LabelFormatterParams,
} from '@ag-grid-community/core';
import { TData } from './types';
import { AgGrid, ColumnTypeEnum } from '../../AgGridServices';

const formatter = (params: BarFormatterParams) => {
  const { yValue } = params;
  let fill;
  if (yValue <= 20) fill = '#4fa2d9';
  else if (yValue < 60) fill = '#277cb5';
  else fill = '#195176';
  return {
    fill,
  };
};

export const defaultColDef = {
  flex: 1,
  minWidth: 100,
  resizable: true,
};

export const columnsConfig = AgGrid.colDefs<TData>([
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
    cellRenderer: 'agSparklineCellRenderer',
    cellRendererParams: {
      sparklineOptions: {
        type: 'bar',
        label: {
          enabled: true,
          color: 'white',
          fontSize: 10,
          fontWeight: 'bold',
          formatter: (params: LabelFormatterParams) => {
            return `${params.value}%`;
          },
        },
        paddingOuter: 0,
        padding: {
          top: 0,
          bottom: 0,
        },
        valueAxisDomain: [0, 100],
        axis: {
          strokeWidth: 0,
        },
        tooltip: {
          enabled: false,
        },
        formatter,
      },
    },
  },
  {
    field: 'yield',
    type: [ColumnTypeEnum.text],
  },
]);
