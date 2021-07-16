import Header from 'components/Header';
import Feed from 'components/Feed';

import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Feed />
    </div>
  );
}

export default App;
