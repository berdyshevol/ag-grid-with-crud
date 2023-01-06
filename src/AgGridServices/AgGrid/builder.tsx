import { GridOptions, SideBarDef } from '@ag-grid-community/core';

type GridProps = {
  gridOptions: GridOptions;
};

const defaultGridOptions: GridOptions = {};
const defaultGridProps = {
  gridOptions: defaultGridOptions,
};

type TAddArgs =
  | { item: 'sideBar'; options: { sideBarDef: SideBarDef } }
  | { item: 'resizable' }
  | { item: 'sortable' }
  | { item: 'filtering' };

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
      sideBar: ({ sideBarDef }: { sideBarDef: SideBarDef }) => {
        this.gridProps = {
          ...this.gridProps,
          gridOptions: {
            ...this.gridProps.gridOptions,
            sideBar: sideBarDef,
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
      filtering: () => {
        this.gridProps = {
          ...this.gridProps,
          gridOptions: {
            ...this.gridProps.gridOptions,
            defaultColDef: {
              ...(this.gridProps.gridOptions?.defaultColDef || {}),
              filter: true,
            },
          },
        };
      },
    };
    // @ts-expect-error fixme: I don't know what type
    map[addArgs.item](addArgs?.options);
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

  filtering = (): Builder<TData> => {
    this.add({ item: 'filtering' });
    return this;
  };

  withSideBar = () => {
    this.add({ item: 'sideBar', options: { sideBarDef: defaultSideBar } });
    return this;
  };

  buildGrid = (): GridProps => this.gridProps;

  private gridProps: GridProps = defaultGridProps;
}
