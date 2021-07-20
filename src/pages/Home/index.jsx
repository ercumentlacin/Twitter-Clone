import Feed from 'components/Feed';
import Header from 'components/Header';
import Widgets from 'components/Widgets';
import styles from './app.module.scss';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.main}>
        <Feed />
        <Widgets />
      </div>
    </div>
  );
};

export default Home;
