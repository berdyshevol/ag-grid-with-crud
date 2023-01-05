import { Save } from '@material-ui/icons';

type SaveEditingProps = {
  handler?: any;
  isEditing?: boolean;
};

export const SaveRowButton = ({ handler, isEditing }: SaveEditingProps) => {
  return (
    <button disabled={isEditing} className="Toolbar-Button" onClick={handler}>
      <span className="Toolbar-Button-Icon">
        <Save />
      </span>

      <span>{'Save'}</span>
    </button>
  );
};
