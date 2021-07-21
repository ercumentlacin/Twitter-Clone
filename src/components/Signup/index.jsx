/* eslint-disable jsx-a11y/label-has-associated-control */
import Button from 'components/Button';
import { FaTwitter } from 'react-icons/fa';
import { dataInput, dataSelect } from './data';
import InputContainer from './InputContainer';
import SelectContainer from './SelectContainer';
import styles from './styles.module.scss';

const Signup = () => {
  function renderSelects() {
    return dataSelect.map((i) => <SelectContainer key={i.name} {...i} />);
  }

  function renderInputs() {
    return dataInput.map((i) => <InputContainer key={i.name} {...i} />);
  }

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
