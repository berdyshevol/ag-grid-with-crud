import { AgGridRender, IAgGridRenderProps } from '../AgGridRender';
import { AgGridToolbar, AgGridToolbarParams } from '../AgGridToolbar';

export interface IGridWToolbarProps<TData> extends IAgGridRenderProps<TData> {
  toolbar?: AgGridToolbarParams<TData>;
}

function GridWToolbar<TData>({
  rowData,
  columnDefs,
  gridOptions,
  height,
  toolbar,
}: IGridWToolbarProps<TData>) {
  return (
    <>
      <AgGridToolbar toolbar={toolbar} />
      <AgGridRender
        rowData={rowData}
        columnDefs={columnDefs}
        gridOptions={gridOptions}
        height={height}
      />
    </>
  );
}

export { GridWToolbar };
