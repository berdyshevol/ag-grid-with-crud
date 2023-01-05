import { useState } from 'react';
import { GridOptions, ColumnApi, GridApi } from '@ag-grid-community/core';
import { AgGridRender, IAgGridRenderProps } from '../AgGridRender';
import { AgGridToolbar, AgGridToolbarParams } from '../AgGridToolbar';

type TGrid = {
  api: GridApi;
  columnApi: ColumnApi;
};
export interface IGridWToolbarProps<TData> extends IAgGridRenderProps<TData> {
  toolbar?: AgGridToolbarParams;
}

function GridWToolbar<TData>({
  rowData,
  columnDefs,
  gridOptions = {},
  height,
  toolbar,
}: IGridWToolbarProps<TData>) {
  const [grid, setGrid] = useState<TGrid | null>(null);
  const onGridReady: GridOptions['onGridReady'] = params => {
    const { api, columnApi } = params;
    setGrid({ api, columnApi });
    gridOptions.onGridReady?.(params);
  };
  const augmentedGridOptions: GridOptions<any> = {
    ...gridOptions,
    onGridReady,
  };

  const search = (e: string) => {
    grid?.api?.setQuickFilter(e);
  };

  const exportExcel = () => {};
  const add = () => {};
  const edit = () => {};
  const save = () => {};
  const deleteRow = () => {};
  const cancel = () => {};
  const grouping = () => {};

  const handlers = {
    export: exportExcel,
    add,
    edit,
    save,
    remove: deleteRow,
    cancel,
    grouping,
    search,
  };

  return (
    <>
      <AgGridToolbar toolbar={toolbar} handlers={handlers} />
      <AgGridRender
        rowData={rowData}
        columnDefs={columnDefs}
        gridOptions={augmentedGridOptions}
        height={height}
      />
    </>
  );
}

export { GridWToolbar };
