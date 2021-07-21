import SearchInput from './SearchInput';
import Trends from './Trends';
import styles from './styles.module.scss';

const Widgets = () => {
  return (
    <aside className={styles.wrapper}>
      <div className={styles.container}>
        <SearchInput />
        <Trends />
      </div>
    </aside>
  );
};

export default Widgets;
