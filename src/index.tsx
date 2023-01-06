import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement === null) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// import { useMemo, useState } from 'react';
// import { render } from 'react-dom';
// import { AgGridReact } from '@ag-grid-community/react';
// import '@ag-grid-community/styles/ag-grid.css';
// import '@ag-grid-community/styles/ag-theme-alpine.css';
// import {
//   BarSparklineOptions,
//   ColDef,
//   ModuleRegistry,
// } from '@ag-grid-community/core';
// import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
// import { SparklinesModule } from '@ag-grid-enterprise/sparklines';
// import { getData } from './data';

// // Register the required feature modules with the Grid
// ModuleRegistry.registerModules([ClientSideRowModelModule, SparklinesModule]);

// const GridExample = () => {
//   const gridStyle = useMemo(() => ({ height: '500px', width: '100%' }), []);
//   const [rowData] = useState<any[]>(getData());
//   const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
//   const [columnDefs] = useState<ColDef[]>([
//     { field: 'symbol', maxWidth: 120 },
//     { field: 'name', minWidth: 250 },
//     {
//       field: 'change',
//       cellRenderer: 'agSparklineCellRenderer',
//       cellRendererParams: {
//         sparklineOptions: {
//           type: 'bar',
//           fill: '#5470c6',
//           stroke: '#91cc75',
//           highlightStyle: {
//             fill: '#fac858',
//           },
//           valueAxisDomain: [0, 1],
//           paddingOuter: 0,
//           padding: {
//             top: 0,
//             bottom: 0,
//           },
//           axis: {
//             strokeWidth: 0,
//           },
//         } as BarSparklineOptions,
//       },
//     },
//     {
//       field: 'volume',
//       type: 'numericColumn',
//       maxWidth: 140,
//     },
//   ]);
//   const defaultColDef = useMemo<ColDef>(() => {
//     return {
//       flex: 1,
//       minWidth: 100,
//       resizable: true,
//     };
//   }, []);

//   return (
//     <div style={containerStyle}>
//       <div style={gridStyle} className="ag-theme-alpine">
//         <AgGridReact
//           rowData={rowData}
//           columnDefs={columnDefs}
//           defaultColDef={defaultColDef}
//           rowHeight={50}
//         />
//       </div>
//     </div>
//   );
// };

// render(<GridExample />, document.querySelector('#root'));
