import { initiallyHidden } from './initiallyHidden';
import { primaryKey } from './primaryKey';
import { text } from './text';
import { number } from './number';

export enum ColumnTypeEnum {
  initiallyHidden = 'initiallyHidden',
  primaryKey = 'primaryKey',
  text = 'text',
  number = 'number',
}
export type IColumnType = `${ColumnTypeEnum}`;
export const columnType = {
  initiallyHidden,
  primaryKey,
  text,
  number,
};
