/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-case-declarations */

import bottomArrow from '../bottomArrow';
import styles from './styles.module.scss';

const SelectContainer = ({ title, name }) => {
  /** @returns Array */

  function data(arg = name) {
    switch (arg) {
      case 'month':
        return [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ];

      case 'day':
        return Array.from(Array(31), (v, i) => i + 1);

      case 'year':
        const years = [];
        for (let index = 1900; index <= new Date().getFullYear(); index += 1) {
          years.push(index);
        }
        return years;

      default:
        return [];
    }
  }

  function options() {
    return data().map((i) => (
      <option key={i} value={i}>
        {i}
      </option>
    ));
  }

  return (
    <div className={styles.selectContainer}>
      <label>
        <span>{title}</span>
      </label>

      <select name={name} id="">
        {options()}
      </select>

      <span className={styles.focus} />

      {bottomArrow()}
    </div>
  );
};

export default SelectContainer;
