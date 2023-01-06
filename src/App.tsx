import { LicenseManager } from '@ag-grid-enterprise/core';
import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { SparklinesModule } from '@ag-grid-enterprise/sparklines';
import './styles/index.scss';
import GridWrapper from './components/GridWrapper/GridWrapper';

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  SparklinesModule,
  // RowGroupingModule,
  // CsvExportModule,
  // ExcelExportModule,
  // SetFilterModule,
  // MenuModule,
  // ColumnsToolPanelModule,
  // FiltersToolPanelModule,
]);

LicenseManager.setLicenseKey(process.env.REACT_APP_AG_GRID_LICENSE || '');

function App() {
  return (
    <div className="App">
      <GridWrapper />
    </div>
  );
}

export default App;
