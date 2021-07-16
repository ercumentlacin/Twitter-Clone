/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import IconComponent from 'components/IconComponent';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const NavItem = ({ SvgComp, title }) => {
  const { RenderIcon } = IconComponent(SvgComp);

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
