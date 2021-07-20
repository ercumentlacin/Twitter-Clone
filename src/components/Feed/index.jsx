import { useEffect, useState } from 'react';
import PageHead from 'components/PageHead';
import TweetArea from 'components/TweetArea';
import TweetInput from 'components/TweetInput';
import { db } from '../../firebase/firebase';
import styles from './styles.module.scss';

const Feed = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    db.collection('tweets')
      .orderBy('timestamp', 'desc')
      .onSnapshot(
        (snapshot) => {
          return setTweets(
            snapshot.docs.map((t) => ({
              id: t.id,
              data: t.data(),
            }))
          );
        },
        (error) => console.error(error),
        (onCompletion) => console.log(onCompletion)
      );
  }, []);

  function renderTweets() {
    if (tweets && tweets.length) {
      return tweets.map((v) => <TweetArea key={v.id} {...v} />);
    }
    return null;
  }

  return (
    <main className={styles.wrapper}>
      <PageHead title="Anasayfa" icon="WiStars" />

      <TweetInput />

      <div className={styles.clear} />

      {renderTweets()}
    </main>
  );
};

export default Feed;
