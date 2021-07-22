import { RiMoreLine } from 'react-icons/ri';
import { emailToUserName, getTimeBetweendSecond } from 'utils';
import TweetButtons from './TweetButtons';
import styles from './styles.module.scss';

const TweetArea = ({
  data: { message, name, timestamp, photoUrl = '', email = '' },
}) => {
  const untilBeforeTime = getTimeBetweendSecond({ start: timestamp?.toDate() });

  const userMention = email.length ? emailToUserName(email) : 'anonymous';
  const userPhoto = photoUrl.length
    ? photoUrl
    : 'assets/images/user_picture.jpg';

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgArea}>
        <img src={userPhoto} alt={name} />
      </div>
      <div className={styles.inputArea}>
        <div className={styles.description}>
          <div className={styles.text}>
            <strong>{name || 'Anonymus'}</strong>
            <span>@{userMention}</span>
            <span>·</span>
            <time>{`${untilBeforeTime.time}${untilBeforeTime.key}`}</time>
          </div>

          <div className={styles.more}>
            <RiMoreLine />
          </div>
        </div>

        <div className={styles.messagesArea}>
          <article>
            {message ||
              `What should I learn next? What should I prioritize learning?
            Don&apos;t try to learn anything. Pick a framework (React, Vue,
            Angular). Build that side project that you always wanted to build,
            see it through. Don&apos;t get distracted with the new shiny thing.
            Pick one, build, learn.`}
          </article>
          <TweetButtons />
        </div>
      </div>
    </div>
  );
};

export default TweetArea;
