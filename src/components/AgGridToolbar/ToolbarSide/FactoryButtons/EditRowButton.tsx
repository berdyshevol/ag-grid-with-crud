import { EditOutlined } from '@material-ui/icons';

type EditProjectProps = {
  handler?: any;
  isEditing?: boolean;
};

export const EditRowButton = ({ handler, isEditing }: EditProjectProps) => {
  return (
    <button disabled={!isEditing} className="Toolbar-Button" onClick={handler}>
      <span className="Toolbar-Button-Icon">
        <EditOutlined />
      </span>

      <span>{'Edit'}</span>
    </button>
  );
};
