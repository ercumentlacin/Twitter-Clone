import GetWidth from 'Hooks/GetWidth';
import { RiMoreLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { actionLogout } from 'store/actions/user';
import { emailToUserName } from 'utils';
import styles from './styles.module.scss';

/** @typedef {Object} USER
 * @property {String} displayName
 * @property {String} email
 * @property {String} photoURL
 * @property {String} userId
 */

const ButtonUser = () => {
  const { width } = GetWidth();
  /**
   * @type {USER}
   */
  const currentUser = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const onClickLogout = () => dispatch(actionLogout());

  const userSlug = emailToUserName(currentUser.email);

  return (
    <div onClick={onClickLogout} className={styles.dFlex} aria-hidden="true">
      <div className={styles.img}>
        <img
          src={currentUser.photoURL}
          alt={currentUser.displayName}
          title="Çıkış yapmak için tıkla"
        />
      </div>
      {width > 992 && (
        <>
          <div className={styles.text}>
            <strong>{currentUser.displayName}</strong>
            <span>@{userSlug}</span>
          </div>
          <div className={styles.more}>
            <RiMoreLine />
          </div>
        </>
      )}
    </div>
  );
};

export default ButtonUser;
