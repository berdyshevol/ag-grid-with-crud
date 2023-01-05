import { GridOptions } from '@ag-grid-community/core';
import { useState } from 'react';
import { AgGridReact } from '@ag-grid-community/react';

import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';

interface IProps<TData> {
  rowData: GridOptions<TData>['rowData'];
  columnDefs: GridOptions<TData>['columnDefs'];
  gridOptions?: GridOptions<TData>;
}

function AgGridWithNoGrouping<TData>({
  rowData,
  columnDefs: columnDefsInit,
  gridOptions = {},
}: IProps<TData>) {
  const [columnDefs] = useState(columnDefsInit);
  const {
    rowData: ignoreThisRowData,
    columnDefs: ignoreThisColumnDefs,
    ...newGridOptions
  } = gridOptions;

  return (
    <div
      className={`ag-theme-alpine AgGridReact`}
      data-cy="AgGridWithNoGrouping"
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        gridOptions={newGridOptions}
      />
    </div>
  );
}

export { AgGridWithNoGrouping };
