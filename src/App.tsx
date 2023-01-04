import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import './styles/index.scss';
import GridWrapper from './components/GridWrapper/GridWrapper';

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  // RowGroupingModule,
  // CsvExportModule,
  // ExcelExportModule,
  // SetFilterModule,
  // MenuModule,
  // ColumnsToolPanelModule,
  // FiltersToolPanelModule,
]);

function App() {
  return (
    <div className="App">
      <GridWrapper />
    </div>
  );
}

export default App;
