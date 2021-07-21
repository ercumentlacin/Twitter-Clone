/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from './styles.module.scss';

const InputContainer = ({ name, title, count, type }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>
        <span className={styles.title}>{title}</span>
        {count === 50 && <div className={styles.count}>0 / {count}</div>}
      </label>

      <input type={type} name={name} maxLength={count} />
      <span className={styles.focus} />
    </div>
  );
};

export default InputContainer;
