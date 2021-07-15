import Navigation from 'components/Navigation';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
};

export default Header;
