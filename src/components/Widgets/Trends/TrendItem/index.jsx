import { RiMoreLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const TrendItem = ({ header, main, footer }) => {
  return (
    <div className={styles.trendsItemWrapper}>
      <header>
        <p>{header}</p>
        <span>
          <RiMoreLine />
        </span>
      </header>
      <main>
        <strong>{main}</strong>
      </main>
      <footer>
        <span className={styles.count}>{footer}</span>
      </footer>
    </div>
  );
};

TrendItem.propTypes = {
  header: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
};

export default TrendItem;
