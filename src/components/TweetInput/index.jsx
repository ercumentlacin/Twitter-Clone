import { createElement, useState } from 'react';
import { BsImage } from 'react-icons/bs';
import { RiFileGifLine } from 'react-icons/ri';
import { ImParagraphLeft } from 'react-icons/im';
import { GrEmoji, GrPlan } from 'react-icons/gr';
import Button from 'components/Button';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { uuid } from 'uuidv4';
import { db } from '../../firebase/firebase';

import styles from './styles.module.scss';

const TweetInput = () => {
  const buttons = [BsImage, RiFileGifLine, ImParagraphLeft, GrEmoji, GrPlan];

  const INITIAL_TWEET_STATE = {
    message: '',
  };
  const [tweet, setTweet] = useState(INITIAL_TWEET_STATE);

  const { user } = useSelector((state) => state);
  const oUser = user?.user;

  console.log({ oUser });

  const onChangeTweet = (e) => {
    setTweet({ ...tweet, [e.target.name]: e.target.value });
  };

  const onTweetSubmit = async (e) => {
    e.preventDefault();

    await db.collection('tweets').add({
      userId: oUser?.userId,
      id: uuid(),
      name: oUser.displayName,
      description: 'This is a test tweet',
      message: tweet.message,
      photoUrl: oUser.photoURL,
      email: oUser.email,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      like: [],
      retweet: [],
      comment: [],
    });

    setTweet(INITIAL_TWEET_STATE);
  };

  function renderButtons() {
    return buttons.map((button) => (
      <span key={button}>{createElement(button)}</span>
    ));
  }

  return (
    <form onSubmit={onTweetSubmit} className={styles.wrapper}>
      <div className={styles.imgArea}>
        <img
          src={`${oUser.photoURL ?? 'assets/images/user_picture.jpg'}`}
          alt="user"
        />
      </div>
      <div className={styles.right}>
        <div className={styles.textArea}>
          <label htmlFor="message">
            <textarea
              name="message"
              id="message"
              placeholder="Neler oluyor?"
              maxLength="280"
              value={tweet.message}
              onChange={onChangeTweet}
            />
          </label>
        </div>
        <div className={styles.buttons}>
          <div className={styles.left}>{renderButtons()}</div>
          <Button
            disabled={!tweet.message.length}
            variant="primary"
            size="md"
            type="submit"
          >
            Tweetle
          </Button>
        </div>
      </div>
    </form>
  );
};

export default TweetInput;
