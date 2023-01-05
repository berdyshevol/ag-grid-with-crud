import { Close } from '@material-ui/icons';

type CancelEditingProps = {
  handler?: any;
  isEditing?: boolean;
};

export const CancelEditRowButton = ({
  handler,
  isEditing,
}: CancelEditingProps) => {
  return (
    <button disabled={isEditing} className="Toolbar-Button" onClick={handler}>
      <span className="Toolbar-Button-Icon">
        <Close />
      </span>

      <span>{'Cancel'}</span>
    </button>
  );
};
