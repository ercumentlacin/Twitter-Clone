/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from './styles.module.scss';

const InputContainer = ({ name, title, count, type, setForm, form }) => {
  const onInputChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  return (
    <div className={`${styles.inputContainer} ${form[name] && styles.length} `}>
      <label htmlFor={name}>
        <span className={styles.title}>{title}</span>
        {count === 50 && (
          <div className={styles.count}>
            {form[name].length} / {count}
          </div>
        )}
      </label>

      <input
        type={type}
        name={name}
        maxLength={count}
        value={form[name]}
        onChange={onInputChange}
      />
      <span className={styles.focus} />
    </div>
  );
};

export default InputContainer;
