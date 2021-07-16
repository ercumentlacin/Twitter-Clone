import IconComponent from 'components/IconComponent';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const PageHead = ({ title, icon }) => {
  const { RenderIcon } = IconComponent(icon);
  return (
    <div className={styles.wrapper}>
      <h1>{title}</h1>

      <div className={styles.icons}>
        <RenderIcon />
      </div>
    </div>
  );
};

PageHead.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default PageHead;
