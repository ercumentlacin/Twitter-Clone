import Header from 'components/Header';
import Feed from 'components/Feed';
import Widgets from 'components/Widgets';

import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.main}>
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
