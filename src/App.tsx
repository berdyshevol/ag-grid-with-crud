import { LicenseManager } from '@ag-grid-enterprise/core';
import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { FiltersToolPanelModule } from '@ag-grid-enterprise/filter-tool-panel';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import { CsvExportModule } from '@ag-grid-community/csv-export';
import { ExcelExportModule } from '@ag-grid-enterprise/excel-export';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { SparklinesModule } from '@ag-grid-enterprise/sparklines';

import './styles/index.scss';
import GridWrapper from './components/GridWrapper/GridWrapper';

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  SparklinesModule,
  RowGroupingModule,
  CsvExportModule,
  ExcelExportModule,
  SetFilterModule,
  MenuModule,
  ColumnsToolPanelModule,
  FiltersToolPanelModule,
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
