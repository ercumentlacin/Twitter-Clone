/* eslint-disable react/no-array-index-key */
import Button from 'components/Button';
import InputContainer from 'components/Signup/InputContainer';
import firebase from 'firebase/app';
import { useState } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { actionLogin } from 'store/actions/user';
import { dataLogin } from './dataLogin';
import styles from './styles.module.scss';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onClickSignin = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((result) => {
        if (result && result.user) {
          // success
          dispatch(
            actionLogin({
              email: result.user.email,
              password: result.user.password,
              displayName: result.user.displayName,
              photoURL: result.user.photoURL,
            })
          );
          setForm({ email: '', password: '' });
        }
      })
      .catch((error) => {
        // error
        console.log(error);
      });
  };

  function renderInputs() {
    return dataLogin.map((v, key) => (
      <InputContainer key={key} {...v} form={form} setForm={setForm} />
    ));
  }

  return (
    <div className={styles.loginPageWrapper}>
      <div className={styles.loginPage}>
        <div className={styles.container}>
          <header>
            <FaTwitter />
            <h1>Twitter&#39;a giriş yap</h1>
          </header>

          <main>
            <form onSubmit={onClickSignin}>
              {renderInputs()}
              <Button
                disabled={!form.email.length || !form.password.length}
                size="lg"
                type="submit"
              >
                Giriş yap
              </Button>
            </form>
          </main>

          <footer>
            <span className={styles.link}>Şifreni mi unuttun ? </span>
            <span>.</span>
            <span className={styles.link}>Twitter&#39;a kaydol</span>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Login;
