import { GridOptions, SideBarDef } from '@ag-grid-community/core';

type GridProps = {
  gridOptions: GridOptions;
};

const defaultGridOptions: GridOptions = {};
const defaultGridProps = {
  gridOptions: defaultGridOptions,
};

type TAddArgs =
  | { item: 'sideBar' }
  | { item: 'resizable' }
  | { item: 'sortable' };

const defaultSideBar: SideBarDef = {
  toolPanels: [
    {
      id: 'columns',
      labelDefault: 'Columns',
      labelKey: 'columns',
      iconKey: 'columns',
      toolPanel: 'agColumnsToolPanel',
      // see docs. https://www.ag-grid.com/react-data-grid/tool-panel-columns/#section-visibility
      toolPanelParams: {
        suppressPivotMode: true,
        suppressRowGroups: true,
        suppressValues: true,
      },
    },
    {
      id: 'filters',
      labelDefault: 'Filters',
      labelKey: 'filters',
      iconKey: 'filter',
      toolPanel: 'agFiltersToolPanel',
    },
  ],
  position: 'left',
  hiddenByDefault: false,
};

export class Builder<TData> {
  constructor(initGridProps: GridProps | undefined) {
    if (initGridProps !== undefined) {
      this.gridProps = initGridProps;
    }
  }

  add = (addArgs: TAddArgs): Builder<TData> => {
    const map = {
      sideBar: () => {
        this.gridProps = {
          ...this.gridProps,
          gridOptions: {
            ...this.gridProps.gridOptions,
            sideBar: defaultSideBar,
          },
        };
      },
      resizable: () => {
        this.gridProps = {
          ...this.gridProps,
          gridOptions: {
            ...this.gridProps.gridOptions,
            defaultColDef: {
              ...(this.gridProps.gridOptions?.defaultColDef || {}),
              resizable: true,
            },
          },
        };
      },
      sortable: () => {
        this.gridProps = {
          ...this.gridProps,
          gridOptions: {
            ...this.gridProps.gridOptions,
            defaultColDef: {
              ...(this.gridProps.gridOptions?.defaultColDef || {}),
              sortable: true,
            },
          },
        };
      },
    };
    map[addArgs.item]();
    return this;
  };

  resizable = (): Builder<TData> => {
    this.add({ item: 'resizable' });
    return this;
  };

  sortable = (): Builder<TData> => {
    this.add({ item: 'sortable' });
    return this;
  };

  buildGrid = (): GridProps => this.gridProps;

  private gridProps: GridProps = defaultGridProps;
}
