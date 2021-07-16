import PropTypes from 'prop-types';
import styles from './styles.module.scss';

/* eslint-disable */
const Button = (props) => {
  const { children, variant, size } = props;

  return (
    <button
      type="button"
      className={`${styles.button} ${styles[variant]} ${styles[size]}  `}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

Button.defaultProps = {
  variant: 'primary',
  size: 'sm',
};

export default Button;
