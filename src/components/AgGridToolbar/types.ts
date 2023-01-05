import { ReactElement } from 'react';

export type CustomToolbarItem<TData> = {
  callback: AgGridToolbarHandler<TData>;
  textAfterIcon?: string;
  icon?: ReactElement | SVGElement;
  dataCy?: string;
  classnames?: string;
};

export type ToolbarItemNames =
  | 'add'
  | 'edit'
  | 'save'
  | 'remove'
  | 'cancel'
  | 'grouping'
  | 'export'
  | 'search';
export type ToolbarItem<TData> = ToolbarItemNames | CustomToolbarItem<TData>;

export type AgGridToolbarParams<TData> =
  | {
      left?: ToolbarItem<TData>[];
      right?: ToolbarItem<TData>[];
    }
  | undefined;

export type AgGridToolbarHandler<TData> = (args: TData) => Promise<any>;
