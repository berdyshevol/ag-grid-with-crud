const Icons = require('../../../../images/icons');

// @ts-expect-error fixme
export const ExportButton = ({ handler }) => {
  return (
    <button className="Toolbar-Button Toolbar-Button_export" onClick={handler}>
      {Icons.fileExcelOutlined}
      <span>{'Export Excel'}</span>
    </button>
  );
};
