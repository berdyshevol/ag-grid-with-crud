import { useState } from 'react';
import { GridOptions } from '@ag-grid-community/core';
import { AgGrid } from '../../AgGridServices';
import { data } from './data';
import { TData } from './types';
import { columnsConfig, defaultColDef } from './columnsConfig';
import { GridWToolbar } from '../GridWToolbar';
import { AgGridToolbarParams } from '../AgGridToolbar';

function GridWrapper() {
  const [
    rowData,
    // setRowData
  ] = useState(data);
  const columnDefs = columnsConfig;

  const gridOptions: GridOptions<TData> = {
    defaultColDef,
    columnTypes: AgGrid.columnTypes<TData>('primaryKey', 'text'),
  };

  const { gridOptions: newGridOptions } = new AgGrid.Builder<TData>({
    gridOptions,
  })
    .withSideBar()
    .resizable()
    .sortable()
    .buildGrid();

  // const onClick = () => {
  //   setRowData(prev => {
  //     return prev.map((el: any) => ({
  //       ...el,
  //       coverage: el.coverage + 1,
  //     }));
  //   });
  // };

  const toolbar: AgGridToolbarParams = {
    right: ['search'],
  };

  return (
    <>
      {/* <button onClick={onClick}>Get Data</button> */}
      <GridWToolbar
        rowData={rowData}
        columnDefs={columnDefs}
        gridOptions={newGridOptions}
        toolbar={toolbar}
      />
    </>
  );
}

export default GridWrapper;
