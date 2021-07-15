/* eslint-disable */
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const NavItem = ({ SvgComp, title }) => {
  const type = SvgComp.slice(0, 2).toLowerCase();
  const ICON = require(/* webpackIgnore: true */ `react-icons/${type}`);
  const RenderIcon = ICON[SvgComp];

  if (!RenderIcon) return null;

  return (
    <div className={styles.navItem}>
      <RenderIcon />

      <span>{title}</span>
    </div>
  );
};

NavItem.propTypes = {
  SvgComp: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavItem;
