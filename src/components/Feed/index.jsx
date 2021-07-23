import PageHead from 'components/PageHead';
import TweetArea from 'components/TweetArea';
import TweetInput from 'components/TweetInput';
import FlipMove from 'react-flip-move';
import Spinner from 'components/Spinner';
import GetTweets from 'services/GetTweets';
import styles from './styles.module.scss';

const Feed = () => {
  const { tweets, loading } = GetTweets();

  function renderTweets() {
    if (loading) return <Spinner />;
    if (tweets && tweets.length) {
      return (
        <FlipMove>
          {tweets.map((v) => (
            <TweetArea key={v.id} {...v} />
          ))}
        </FlipMove>
      );
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
