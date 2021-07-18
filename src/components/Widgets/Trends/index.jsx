import { IoSettingsOutline } from 'react-icons/io5';
import styles from './styles.module.scss';

const Trends = () => {
  return (
    <section className={styles.wrapper}>
      <header>
        <h2>İlgini çekebilecek gündemler</h2>
        <span>
          <IoSettingsOutline />
        </span>
      </header>
    </section>
  );
};

export default Trends;
