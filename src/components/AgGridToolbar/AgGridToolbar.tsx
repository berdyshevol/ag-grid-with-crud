import ToolbarSide from './ToolbarSide';
import {
  AgGridToolbarHandler,
  AgGridToolbarParams,
  ToolbarItemNames,
} from './types';

interface IProps {
  toolbar?: AgGridToolbarParams;
  handlers?: Record<ToolbarItemNames, AgGridToolbarHandler>;
  isEditing?: boolean;
  isGrouping?: boolean;
}

function AgGridToolbar({ toolbar, handlers, isEditing, isGrouping }: IProps) {
  if (!toolbar) {
    return null;
  }
  const { left = [], right = [] } = toolbar;

  return (
    <div className="AgGrid-Toolbar Toolbar" data-cy="toolbar-ag-grid">
      <div className="Toolbar-Left">
        <ToolbarSide
          side={left}
          handlers={handlers}
          isEditing={isEditing}
          isGrouping={isGrouping}
        />
      </div>
      <div className="Toolbar-Right">
        <ToolbarSide
          side={right}
          handlers={handlers}
          isEditing={isEditing}
          isGrouping={isGrouping}
        />
      </div>
    </div>
  );
}

export { AgGridToolbar };
