import PageHead from 'components/PageHead';
import TweetArea from 'components/TweetArea';
import styles from './styles.module.scss';

const Feed = () => {
  return (
    <main className={styles.wrapper}>
      <PageHead title="Anasayfa" icon="WiStars" />
      <TweetArea />
    </main>
  );
};

export default Feed;
