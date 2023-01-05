import { ReactElement } from 'react';

export type CustomToolbarItem = {
  callback: AgGridToolbarHandler;
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
export type ToolbarItem = ToolbarItemNames | CustomToolbarItem;

export type AgGridToolbarParams =
  | {
      left?: ToolbarItem[];
      right?: ToolbarItem[];
    }
  | undefined;

export type AgGridToolbarHandler = (args: any) => void;
