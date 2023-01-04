import { initiallyHidden } from './initiallyHidden';
import { primaryKey } from './primaryKey';
import { text } from './text';

export enum ColumnTypeEnum {
  initiallyHidden = 'initiallyHidden',
  primaryKey = 'primaryKey',
  text = 'text',
}
export type IColumnType = `${ColumnTypeEnum}`;
export const columnType = {
  initiallyHidden,
  primaryKey,
  text,
};
