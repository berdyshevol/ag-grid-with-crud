import { Delete } from '@material-ui/icons';

type RemoveProjectProps = {
  handler?: any;
  isEditing?: boolean;
};

export const RemoveRowButton = ({ handler, isEditing }: RemoveProjectProps) => {
  return (
    <button disabled={!isEditing} className="Toolbar-Button" onClick={handler}>
      <span className="Toolbar-Button-Icon">
        <Delete />
      </span>

      <span>{'Delete'}</span>
    </button>
  );
};
