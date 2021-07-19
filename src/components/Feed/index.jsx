import { useEffect, useState } from 'react';
import PageHead from 'components/PageHead';
import TweetArea from 'components/TweetArea';
import TweetInput from 'components/TweetInput';
import { db } from '../../firebase/firebase';
import styles from './styles.module.scss';

const Feed = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    db.collection('tweets').onSnapshot((snapshot) =>
      setTweets(
        snapshot.docs.map((t) => ({
          id: t.id,
          data: t.data(),
        }))
      )
    );
  }, []);

  console.log('tweets', tweets);

  return (
    <main className={styles.wrapper}>
      <PageHead title="Anasayfa" icon="WiStars" />

      <TweetInput />

      <div className={styles.clear} />

      <TweetArea />
    </main>
  );
};

export default Feed;
