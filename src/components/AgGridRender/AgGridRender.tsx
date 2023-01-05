import { GridOptions } from '@ag-grid-community/core';
import { useState } from 'react';
import { AgGridReact } from '@ag-grid-community/react';

import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';

const getHeight = (height: number | undefined): number => {
  const { innerHeight } = window;
  return height === undefined ? Number(innerHeight) : height;
};
export interface IAgGridRenderProps<TData> {
  rowData: GridOptions<TData>['rowData'];
  columnDefs: GridOptions<TData>['columnDefs'];
  gridOptions?: GridOptions<TData>;
  height?: number;
}

function AgGridRender<TData>({
  rowData,
  columnDefs: columnDefsInit,
  gridOptions = {},
  height,
}: IAgGridRenderProps<TData>) {
  const [columnDefs] = useState(columnDefsInit);
  const {
    rowData: ignoreThisRowData,
    columnDefs: ignoreThisColumnDefs,
    ...newGridOptions
  } = gridOptions;
  const augmentedGridSettings: GridOptions<TData> = {
    ...newGridOptions,
    rowGroupPanelShow: 'never',
  };
  const gridHeight = getHeight(height);

  return (
    <div style={{ height: gridHeight }}>
      <div className={`ag-theme-alpine AgGrid`} data-cy="AgGridRender">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          gridOptions={augmentedGridSettings}
        />
      </div>
    </div>
  );
}

export { AgGridRender };
