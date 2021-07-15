import NavItem from 'components/NavItem';
import { FaTwitter } from 'react-icons/fa';
import navItemData from './data';
import styles from './styles.module.scss';

const Navigation = () => {
  function renderNavItems() {
    return navItemData.map((o) => (
      <NavItem key={o.id} SvgComp={o.svg} title={o.title} />
    ));
  }

  return (
    <nav className={styles.nav}>
      {/* brand */}
      <FaTwitter />
      <h1>nav</h1>
      {renderNavItems()}
    </nav>
  );
};

export default Navigation;
