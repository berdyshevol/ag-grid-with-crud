import { ColDef } from '@ag-grid-community/core';
import { IColumnType, columnType } from '../ColumnTypes';

/**
 * Produce an object map of custom column types which contain groups of properties that column definitions can inherit by referencing in their type property.
 * @see https://www.ag-grid.com/react-data-grid/column-definitions/#custom-column-types
 */
export const columnTypes = <TData>(
  ...types: IColumnType[]
): Record<IColumnType, ColDef<TData>> => {
  return types.reduce((acc, columnTypeName) => {
    acc[columnTypeName] = columnType[columnTypeName];

    return acc;
  }, {} as Record<IColumnType, ColDef<TData>>);
};
