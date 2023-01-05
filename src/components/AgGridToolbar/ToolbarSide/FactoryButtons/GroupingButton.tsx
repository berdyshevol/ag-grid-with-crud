import { Group } from '@material-ui/icons';

type CancelEditingProps = {
  handler?: any;
  isEditing?: boolean;
  isGrouping?: boolean;
};

export const GroupingButton = ({
  handler,
  isEditing,
  isGrouping,
}: CancelEditingProps) => {
  return (
    <button
      disabled={!isEditing}
      className={`Toolbar-Button ${
        isGrouping ? 'Toolbar-Button_Grouping' : ''
      }`}
      onClick={handler}
    >
      <span className="Toolbar-Button-Icon">
        <Group />
      </span>

      <span>{'Grouping'}</span>
    </button>
  );
};
