import Button from 'components/Button';
import NavItem from 'components/NavItem';
import GetWidth from 'Hooks/GetWidth';
import { FaFeatherAlt, FaTwitter } from 'react-icons/fa';
import navItemData from './data';
import styles from './styles.module.scss';

const Navigation = () => {
  function renderNavItems() {
    return navItemData.map((o) => (
      <NavItem key={o.id} SvgComp={o.svg} title={o.title} />
    ));
  }

  const { width } = GetWidth();

  return (
    <nav className={styles.nav}>
      {/* brand */}
      <span className={styles.brand}>
        <FaTwitter />
      </span>
      {renderNavItems()}

      <div
        className={`${styles.btnContainer} ${
          width <= 992 && styles.changeIcon
        }`}
      >
        <Button variant="primary" size={width > 992 ? 'lg' : 'sm'}>
          {width > 992 ? 'Tweetle' : <FaFeatherAlt />}
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
