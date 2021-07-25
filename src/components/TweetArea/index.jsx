/* eslint-disable no-unused-vars */
import { forwardRef } from 'react';
import { RiMoreLine } from 'react-icons/ri';
import { uuid } from 'uuidv4';
import { emailToUserName, getTimeBetweendSecond } from 'utils';
import TweetButtons from './TweetButtons';
import styles from './styles.module.scss';

export default forwardRef(function TweetArea({ data }, ref) {
  const {
    message,
    name,
    timestamp,
    photoUrl = '',
    email = '',
    id = uuid(),
    userId = uuid(),
  } = data;

  const untilBeforeTime = getTimeBetweendSecond({
    start: timestamp?.toDate(),
  });

  const userMention = email.length ? emailToUserName(email) : 'anonymous';
  const userPhoto = photoUrl.length
    ? photoUrl
    : 'assets/images/user_picture.jpg';

  const isImage = message.includes('firebasestorage');

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
          {isImage ? (
            <img src={message} alt="" />
          ) : (
            <article>{message}</article>
          )}
          <TweetButtons {...data} />
        </div>
      </div>
    </div>
  );
});

// export default TweetArea;
