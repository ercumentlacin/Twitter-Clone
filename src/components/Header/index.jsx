import ButtonUser from 'components/ButtonUser';
import Navigation from 'components/Navigation';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Navigation />
        <ButtonUser />
      </div>
    </header>
  );
};

export default Header;
