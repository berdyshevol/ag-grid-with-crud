import { ExportButton } from './ExportButton';
import { EditRowButton } from './EditRowButton';
import { SaveRowButton } from './SaveRowButton';
import { CancelEditRowButton } from './CancelEditRowButton';
import { GroupingButton } from './GroupingButton';
import { AddRowButton } from './AddRowButton';
import { SearchInput } from './SearchInput';
import { RemoveRowButton } from './RemoveRowButton';
import { AgGridToolbarHandler, ToolbarItemNames } from '../../types';

interface FactoryButtonsProps {
  item?: ToolbarItemNames;
  handler?: AgGridToolbarHandler;
  isEditing?: boolean;
  isGrouping?: boolean;
}

function FactoryButtons({
  item,
  handler,
  isEditing,
  isGrouping,
}: FactoryButtonsProps) {
  switch (item) {
    case 'export':
      return <ExportButton handler={handler} />;
    case 'add':
      return <AddRowButton handler={handler} />;
    case 'edit':
      return <EditRowButton handler={handler} isEditing={isEditing} />;
    case 'remove':
      return <RemoveRowButton handler={handler} isEditing={isEditing} />;
    case 'save':
      return <SaveRowButton handler={handler} isEditing={isEditing} />;
    case 'cancel':
      return <CancelEditRowButton handler={handler} isEditing={isEditing} />;
    case 'grouping':
      return (
        <GroupingButton
          handler={handler}
          isEditing={isEditing}
          isGrouping={isGrouping}
        />
      );
    case 'search':
      return <SearchInput handler={handler} />;

    default:
      return null;
  }
}

export default FactoryButtons;
