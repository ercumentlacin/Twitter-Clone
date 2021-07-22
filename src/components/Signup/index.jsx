/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Button from 'components/Button';
import { useState } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { actionLogin } from 'store/actions/user';
import { auth } from 'firebase/firebase';
import profilePic from '../../assets/images/avatar.jpg';
import { dataInput, dataSelect } from './data';
import InputContainer from './InputContainer';
import SelectContainer from './SelectContainer';
import styles from './styles.module.scss';

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  function renderSelects() {
    return dataSelect.map((i) => <SelectContainer key={i.name} {...i} />);
  }

  function renderInputs() {
    return dataInput.map((i) => (
      <InputContainer key={i.name} {...i} setForm={setForm} form={form} />
    ));
  }

  const onClickSignup = () => {
    const { name, email, password } = form;
    if (name.length && email.length && password.length) {
      auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              actionLogin({
                email: userAuth.user.email,
                password: userAuth.user.password,
                displayName: name,
                photoURL: profilePic,
              })
            );
          })
          .catch(({ message }) => console.error(message));
      });
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.signupWrapper}>
        <div className={styles.container}>
          <header>
            <FaTwitter />
          </header>
          <main>
            <form className={styles.top}>
              <h3>Hesabını oluştur</h3>

              {renderInputs()}

              <strong>Doğum tarihi</strong>

              <p>
                Bu, herkese açık olarak gösterilmeyecek. Bu hesap bir işletme,
                evcil hayvan veya başka bir şey için olsa bile kendi yaşını
                doğrulaman gerekir.
              </p>

              <div className={styles.selectArea}>{renderSelects()}</div>

              <div className={styles.buttonArea}>
                <Button onClick={onClickSignup} variant="primary" size="lg">
                  İleri
                </Button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Signup;
