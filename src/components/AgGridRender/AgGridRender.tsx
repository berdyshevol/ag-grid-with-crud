import { GridOptions } from '@ag-grid-community/core';

import { AgGridWithNoGrouping } from './GridWithNoGrouping';

interface IProps<TData> {
  gridOptions: GridOptions<TData>;
}

function AgGridRender<TData>({ gridOptions }: IProps<TData>) {
  return (
    <div className="AgGrid">
      <div>Toolbar</div>
      <div>
        <AgGridWithNoGrouping gridOptions={gridOptions} />
      </div>
    </div>
  );
}

export default AgGridRender;
