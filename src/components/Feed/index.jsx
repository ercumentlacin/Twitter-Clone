import PageHead from 'components/PageHead';
import TweetArea from 'components/TweetArea';
import TweetInput from 'components/TweetInput';
import styles from './styles.module.scss';

const Feed = () => {
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
