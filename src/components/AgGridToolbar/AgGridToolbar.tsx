import ToolbarSide from './ToolbarSide';
import {
  AgGridToolbarHandler,
  AgGridToolbarParams,
  ToolbarItemNames,
} from './types';

interface IProps<TData> {
  toolbar?: AgGridToolbarParams<TData>;
  handlers?: Record<ToolbarItemNames, AgGridToolbarHandler<TData>>;
  isEditing?: boolean;
  isGrouping?: boolean;
}

function AgGridToolbar<TData>({
  toolbar,
  handlers,
  isEditing,
  isGrouping,
}: IProps<TData>) {
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
