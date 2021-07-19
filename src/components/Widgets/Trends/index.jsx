import { IoSettingsOutline } from 'react-icons/io5';
import TrendItem from './TrendItem';

import styles from './styles.module.scss';
import dataTrends from './dataTrends';

const Trends = () => {
  function renderTrendItems() {
    return dataTrends.map((v) => <TrendItem key={v.id} {...v} />);
  }

  return (
    <section className={styles.wrapper}>
      <header>
        <h2>İlgini çekebilecek gündemler</h2>
        <span>
          <IoSettingsOutline />
        </span>
      </header>
      <main>{renderTrendItems()}</main>
      <footer>
        <span>Daha fazla göster</span>
      </footer>
    </section>
  );
};

export default Trends;
