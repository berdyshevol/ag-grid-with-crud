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
};

export const columnsConfig = AgGrid.colDefs<TData>([
  { field: 'id', type: ColumnTypeEnum.primaryKey },
  {
    field: 'manufacture',
    headerName: 'Manufacture',
    type: [ColumnTypeEnum.text],
  },
  {
    field: 'model',
    headerName: 'Model',
    type: [ColumnTypeEnum.text],
  },
  {
    field: 'assert_number',
    headerName: 'Assert Number',
    type: [ColumnTypeEnum.number],
  },
  {
    field: 'serial_number',
    headerName: 'Serial Number',
    type: [ColumnTypeEnum.text],
  },
  {
    field: 'ip_address',
    headerName: 'IP Address',
    type: [ColumnTypeEnum.text],
  },
  {
    field: 'erp_id',
    headerName: 'ERP ID',
    type: [ColumnTypeEnum.text],
  },
  {
    field: 'level',
    headerName: 'Level',
  },
  {
    field: 'coverage',
    headerName: 'Coverage',
    type: [ColumnTypeEnum.number],
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
    headerName: 'Yield',
    type: [ColumnTypeEnum.text],
  },
]);
