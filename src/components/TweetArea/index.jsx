import { RiMoreLine } from 'react-icons/ri';
import TweetButtons from './TweetButtons';
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

        <div className={styles.messagesArea}>
          <article>
            What should I learn next? What should I prioritize learning?
            Don&apos;t try to learn anything. Pick a framework (React, Vue,
            Angular). Build that side project that you always wanted to build,
            see it through. Don&apos;t get distracted with the new shiny thing.
            Pick one, build, learn.
          </article>
          <TweetButtons />
        </div>
      </div>
    </div>
  );
};

export default TweetArea;
