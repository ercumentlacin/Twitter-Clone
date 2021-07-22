import { forwardRef } from 'react';
import { RiMoreLine } from 'react-icons/ri';
import { emailToUserName, getTimeBetweendSecond } from 'utils';
import TweetButtons from './TweetButtons';
import styles from './styles.module.scss';

const TweetArea = forwardRef(
  ({ data: { message, name, timestamp, photoUrl = '', email = '' } }, ref) => {
    const untilBeforeTime = getTimeBetweendSecond({
      start: timestamp?.toDate(),
    });

    const userMention = email.length ? emailToUserName(email) : 'anonymous';
    const userPhoto = photoUrl.length
      ? photoUrl
      : 'assets/images/user_picture.jpg';

    return (
      <div ref={ref} className={styles.wrapper}>
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
            <article>{message}</article>
            <TweetButtons />
          </div>
        </div>
      </div>
    );
  }
);

export default TweetArea;
