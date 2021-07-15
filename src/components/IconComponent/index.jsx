import * as icons from 'react-icons/all';

const IconComponent = ({ comboName }) => {
  // eslint-disable-next-line no-unused-vars
  const [_, iconName] = comboName.split('/');
  const iconComponent = iconName ? icons[iconName] : icons.FaFileExcel;
  return iconComponent;
};

export default IconComponent;
