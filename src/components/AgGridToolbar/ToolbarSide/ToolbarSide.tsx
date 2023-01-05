import { AgGridToolbarHandler, ToolbarItem, ToolbarItemNames } from '../types';
import FactoryButtons from './FactoryButtons';

interface ToolbarSideProps<TData> {
  side: ToolbarItem<TData>[];
  handlers?: Record<ToolbarItemNames, AgGridToolbarHandler<TData>>;
  isEditing?: boolean;
  isGrouping?: boolean;
}

function ToolbarSide<TData>({
  side,
  handlers,
  isEditing,
  isGrouping,
}: ToolbarSideProps<TData>) {
  return (
    <>
      {side.map(item => {
        switch (typeof item) {
          case 'string': {
            return (
              <FactoryButtons
                key={item}
                item={item}
                handler={handlers?.[item]}
                isEditing={isEditing}
                isGrouping={isGrouping}
              />
            );
          }
          case 'object': {
            return null;
          }
          default: {
            return null;
          }
        }
      })}
    </>
  );
}

export default ToolbarSide;
