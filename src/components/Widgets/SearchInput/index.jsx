import { IoSearchOutline } from 'react-icons/io5';
import styles from './styles.module.scss';

const SearchInput = () => {
  return (
    <form className={styles.wrapper}>
      <div className={styles.icon}>
        <IoSearchOutline />
      </div>
      <div className={styles.input}>
        <input type="text" placeholder="Twitter'da Ara" />
      </div>
    </form>
  );
};

export default SearchInput;
