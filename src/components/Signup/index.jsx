/* eslint-disable jsx-a11y/label-has-associated-control */
import Button from 'components/Button';
import { FaTwitter } from 'react-icons/fa';
import bottomArrow from './bottomArrow';
import styles from './styles.module.scss';

const Signup = () => {
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

              <label htmlFor="name">
                <input
                  type="text"
                  name="name"
                  placeholder="İsim"
                  maxLength="50"
                />
                <span className={styles.focus} />
              </label>

              <label htmlFor="phone">
                <input type="phone" name="phone" placeholder="Telefon" />
                <span className={styles.focus} />
              </label>

              <span className={styles.toggleInput}>E-posta kullan</span>

              <strong>Doğum tarihi</strong>

              <p>
                Bu, herkese açık olarak gösterilmeyecek. Bu hesap bir işletme,
                evcil hayvan veya başka bir şey için olsa bile kendi yaşını
                doğrulaman gerekir.
              </p>

              <div className={styles.selectArea}>
                <div>
                  <label>
                    <span>Ay</span>
                  </label>
                  <select name="month" id="">
                    <option value="Ocak">Ocak</option>
                  </select>
                  <span className={styles.focus} />
                  {bottomArrow()}
                </div>

                <div>
                  <label>
                    <span>Gün</span>
                  </label>
                  <select name="day" id="">
                    <option value="Ocak">Ocak</option>
                  </select>
                  <span className={styles.focus} />
                  {bottomArrow()}
                </div>

                <div>
                  <label>
                    <span>Ay</span>
                  </label>
                  <select name="year" id="">
                    <option value="Ocak">Ocak</option>
                  </select>
                  <span className={styles.focus} />
                  {bottomArrow()}
                </div>
              </div>

              <div className={styles.buttonArea}>
                <Button variant="primary" size="lg">
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
