import SearchInput from './SearchInput';
import Trends from './Trends';
import styles from './styles.module.scss';

const Widgets = () => {
  return (
    <aside className={styles.wrapper}>
      <SearchInput />
      <Trends />
    </aside>
  );
};

export default Widgets;
