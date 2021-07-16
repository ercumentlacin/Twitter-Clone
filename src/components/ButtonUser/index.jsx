import { RiMoreLine } from 'react-icons/ri';
import styles from './styles.module.scss';

const ButtonUser = () => {
  return (
    <div className={styles.dFlex}>
      <div className={styles.img}>
        <img src="assets/images/user_picture.jpg" alt="" />
      </div>
      <div className={styles.text}>
        <strong>Ercüment</strong>
        <span>@ercument196</span>
      </div>
      <div className={styles.more}>
        <RiMoreLine />
      </div>
    </div>
  );
};

export default ButtonUser;
