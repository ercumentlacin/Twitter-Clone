import Button from 'components/Button';
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
      <span className={styles.brand}>
        <FaTwitter />
      </span>
      {renderNavItems()}

      <div className={styles.btnContainer}>
        <Button variant="primary" size="lg">
          Tweetle
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
