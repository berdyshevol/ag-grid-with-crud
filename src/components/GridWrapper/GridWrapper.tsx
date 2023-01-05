import { useState } from 'react';
import { GridOptions } from '@ag-grid-community/core';
import { AgGrid } from '../../AgGridServices';
import { data } from './data';
import { TData } from './types';
import { columnsConfig } from './columnsConfig';
import AgGridRender from '../AgGridRender';

function GridWrapper() {
  const [rowData, setRowData] = useState(data);
  const columnDefs = columnsConfig;

  const gridOptions: GridOptions<TData> = {
    // rowData,
    columnDefs,
    columnTypes: AgGrid.columnTypes<TData>('primaryKey', 'text'),
  };

  const onClick = () => {
    setRowData(prev => {
      return prev.map((el: any) => ({
        ...el,
        coverage: el.coverage + 1,
      }));
    });
  };

  return (
    <>
      <button onClick={onClick}>Get Data</button>
      <AgGridRender
        rowData={rowData}
        columnDefs={columnDefs}
        gridOptions={gridOptions}
      />
    </>
  );
}

export default GridWrapper;
