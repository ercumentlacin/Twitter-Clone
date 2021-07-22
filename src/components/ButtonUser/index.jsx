import GetWidth from 'Hooks/GetWidth';
import { RiMoreLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { actionLogout } from 'store/actions/user';
import styles from './styles.module.scss';

const ButtonUser = () => {
  const { width } = GetWidth();

  const dispatch = useDispatch();
  const onClickLogout = () => dispatch(actionLogout());

  return (
    <div onClick={onClickLogout} className={styles.dFlex} aria-hidden="true">
      <div className={styles.img}>
        <img src="assets/images/user_picture.jpg" alt="" />
      </div>
      {width > 992 && (
        <>
          <div className={styles.text}>
            <strong>Ercüment</strong>
            <span>@ercument196</span>
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
