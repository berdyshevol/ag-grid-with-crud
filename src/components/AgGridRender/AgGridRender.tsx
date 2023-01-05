import { GridOptions } from '@ag-grid-community/core';

import { AgGridWithNoGrouping } from './GridWithNoGrouping';

interface IProps<TData> {
  rowData: GridOptions<TData>['rowData'];
  columnDefs: GridOptions<TData>['columnDefs'];
  gridOptions?: GridOptions<TData>;
}

function AgGridRender<TData>({
  rowData,
  columnDefs,
  gridOptions,
}: IProps<TData>) {
  return (
    <div className="AgGrid">
      <div>Toolbar</div>
      <div>
        <AgGridWithNoGrouping
          rowData={rowData}
          columnDefs={columnDefs}
          gridOptions={gridOptions}
        />
      </div>
    </div>
  );
}

export default AgGridRender;
