import { BiMessageRounded, BiHeart } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';
import { IoShareOutline } from 'react-icons/io5';
import styles from './styles.module.scss';

const TweetButtons = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={`${styles.button} ${styles.message}`}>
        <div className={styles.icon}>
          <BiMessageRounded />
        </div>
        <span className={styles.count}>15</span>
      </div>
      <div className={`${styles.button} ${styles.retweet}`}>
        <div className={styles.icon}>
          <FaRetweet />
        </div>
        <span className={styles.count}>15</span>
      </div>
      <div className={`${styles.button} ${styles.like}`}>
        <div className={styles.icon}>
          <BiHeart />
        </div>
        <span className={styles.count}>15</span>
      </div>
      <div className={`${styles.button} ${styles.share}`}>
        <div className={styles.icon}>
          <IoShareOutline />
        </div>
        <span className={styles.count}>15</span>
      </div>
    </footer>
  );
};

export default TweetButtons;
