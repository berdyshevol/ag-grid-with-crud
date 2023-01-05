import { AgGridToolbarHandler, ToolbarItem, ToolbarItemNames } from '../types';
import FactoryButtons from './FactoryButtons';

interface ToolbarSideProps {
  side: ToolbarItem[];
  handlers?: Record<ToolbarItemNames, AgGridToolbarHandler>;
  isEditing?: boolean;
  isGrouping?: boolean;
}

function ToolbarSide({
  side,
  handlers,
  isEditing,
  isGrouping,
}: ToolbarSideProps) {
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
