import ButtonUser from 'components/ButtonUser';
import Navigation from 'components/Navigation';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation />
      <ButtonUser />
    </header>
  );
};

export default Header;
