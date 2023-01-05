import { Add } from '@material-ui/icons';

export const AddRowButton = ({ handler }: any) => {
  return (
    <button onClick={handler} className="Toolbar-Button" title={'Add'}>
      <span className="Toolbar-Button-Icon">
        <Add />
      </span>
      <span>{'Add'}</span>
    </button>
  );
};
