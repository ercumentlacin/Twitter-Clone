import PropTypes from 'prop-types';
import styles from './styles.module.scss';

/* eslint-disable */
const Button = (props) => {
  const { children, variant, size, type } = props;

  return (
    <button
      type={type}
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
  type: PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'sm',
  type: 'button',
};

export default Button;
