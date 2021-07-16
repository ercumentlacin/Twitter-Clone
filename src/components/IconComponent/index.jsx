/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import PropTypes from 'prop-types';

const IconComponent = (props) => {
  const SvgComp = props;

  if (!SvgComp) return null;

  const type = SvgComp.slice(0, 2).toLowerCase();
  const ICON = require(/* webpackIgnore: true */ `react-icons/${type}`);
  const RenderIcon = ICON[SvgComp];

  return {
    RenderIcon,
  };
};

IconComponent.PropTypes = {
  props: PropTypes.string.isRequired,
};

export default IconComponent;
