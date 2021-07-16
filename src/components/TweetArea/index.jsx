import { RiMoreLine } from 'react-icons/ri';
import styles from './styles.module.scss';

const TweetArea = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgArea}>
        <img src="assets/images/user_picture.jpg" alt="user" />
      </div>
      <div className={styles.inputArea}>
        <div className={styles.description}>
          <div className={styles.text}>
            <strong>Ercüment Laçın</strong>
            <span>@ercument196</span>
            <span>·</span>
            <time>27d</time>
          </div>

          <div className={styles.more}>
            <RiMoreLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetArea;
