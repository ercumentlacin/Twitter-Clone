/* eslint-disable consistent-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable dot-notation */
/* eslint-disable react/no-array-index-key */
import { useSelector } from 'react-redux';
import { db } from '../../../firebase/firebase';
import dataButtons from './dataButtons';
import styles from './styles.module.scss';

const TweetButtons = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { id, userId, like, retweet, comment } = props;
  const currentUser = useSelector((state) => state.user.user);

  const onButtonClick = async ({ target }) => {
    const targetName =
      target.parentElement.getAttribute('name') ?? target.getAttribute('name');

    if (targetName === 'like') {
      const tweetRef = db.collection('tweets').doc(id);

      const userThisLike = like.some((i) => i === currentUser.userId);
      const newLikeArray = userThisLike
        ? like.filter((i) => i !== userId)
        : [...like, currentUser.userId];

      debugger;

      return tweetRef
        .update({
          like: newLikeArray,
        })
        .then(() => {
          console.log('Document successfully updated!');
        })
        .catch((error) => {
          console.error('Error updating document: ', error);
        });
    }
  };

  function renderButtons() {
    return dataButtons.map((v, key) => (
      <div
        key={key}
        aria-hidden="true"
        name={v.name}
        onClick={onButtonClick}
        className={`${styles.button} ${styles[v.style]}`}
      >
        <div name={v.name} className={styles.icon}>
          <v.svg />
        </div>
        <span className={styles.count}>{props[v.name]?.length ?? 0}</span>
      </div>
    ));
  }

  return <footer className={styles.wrapper}>{renderButtons()}</footer>;
};

export default TweetButtons;
