import { useState } from 'react';
import { GridOptions } from '@ag-grid-community/core';
import { AgGridReact } from '@ag-grid-community/react';

import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';

interface IProps<TData> {
  gridOptions: GridOptions<TData>;
}

function AgGridWithNoGrouping<TData>({ gridOptions }: IProps<TData>) {
  const [rowData] = useState(gridOptions.rowData);
  const [columnDefs] = useState(gridOptions.columnDefs);

  return (
    <div
      className={`ag-theme-alpine AgGridReact`}
      data-cy="AgGridWithNoGrouping"
    >
      <AgGridReact
        gridOptions={gridOptions}
        rowData={rowData}
        columnDefs={columnDefs}
      />
    </div>
  );
}

export { AgGridWithNoGrouping };
