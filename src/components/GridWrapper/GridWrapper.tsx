import { GridOptions } from '@ag-grid-community/core';
import { AgGrid } from '../../AgGridServices';
import { data } from './data';
import { TData } from './types';
import { columnsConfig } from './columnsConfig';
import AgGridRender from '../AgGridRender';

const rowData = data;

function GridWrapper() {
  const columnDefs = columnsConfig;

  const gridOptions: GridOptions<TData> = {
    rowData,
    columnDefs,
    columnTypes: AgGrid.columnTypes<TData>('primaryKey', 'text'),
  };
  // console.log(AgGrid.columnsTypes<TData>('primaryKey', 'initiallyHidden'));

  return (
    <>
      <AgGridRender gridOptions={gridOptions} />
    </>
  );
}

export default GridWrapper;
