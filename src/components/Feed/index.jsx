import PageHead from 'components/PageHead';
import styles from './styles.module.scss';

const Feed = () => {
  return (
    <main className={styles.wrapper}>
      <PageHead title="Anasayfa" icon="WiStars" iconII="WiStars" />
    </main>
  );
};

export default Feed;
