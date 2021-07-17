import { createElement } from 'react';
import { BsImage } from 'react-icons/bs';
import { RiFileGifLine } from 'react-icons/ri';
import { ImParagraphLeft } from 'react-icons/im';
import { GrEmoji, GrPlan } from 'react-icons/gr';
import Button from 'components/Button';
import styles from './styles.module.scss';

const TweetInput = () => {
  const buttons = [BsImage, RiFileGifLine, ImParagraphLeft, GrEmoji, GrPlan];
  function renderButtons() {
    return buttons.map((button) => (
      <span key={button}>{createElement(button)}</span>
    ));
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgArea}>
        <img src="assets/images/user_picture.jpg" alt="user" />
      </div>
      <div className={styles.right}>
        <div className={styles.textArea}>
          <label htmlFor="text">
            <textarea
              name="text"
              id="text"
              placeholder="Neler oluyor?"
              maxLength="280"
            />
          </label>
        </div>
        <div className={styles.buttons}>
          <div className={styles.left}>{renderButtons()}</div>
          <Button variant="primary" size="md">
            Tweetle
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TweetInput;
