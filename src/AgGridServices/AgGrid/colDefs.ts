import { ColDef } from '@ag-grid-community/core';

type Options = any;

/**
 * AgGrid.colDef helps you to produce colDefs
 * @param columnDefs
 * @param _options
 * @returns ColDef<TData>[]
 */
export function colDefs<TData>(
  columnDefs: ColDef<TData>[],
  _options: Options = {},
): ColDef<TData>[] {
  return columnDefs;
}
