import { FunctionComponent, useCallback } from "react";
import UsernameField from "../components/UsernameField";
import PasswordField from "../components/PasswordField";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone8Plus.module.css";

const IPhone8Plus: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/iphone-8-plus-4");
  }, [navigate]);

  const onRegisterTextClick = useCallback(() => {
    navigate("/iphone-8-plus-3");
  }, [navigate]);

  return (
    <div className={styles.iphone8Plus1}>
      <main className={styles.plusBackgroundParent}>
        <section className={styles.plusBackground} />
        <img
          className={styles.c3dccec9B5e047089688E4328dIcon}
          alt=""
          src="/c3dccec9b5e047089688e4328dd6d4b9removebgpreview-1@2x.png"
        />
        <div className={styles.loginForm}>
          <a className={styles.login}>Login</a>
        </div>
      </main>
      <div className={styles.credentialsParent}>
        <form className={styles.credentials}>
          <div className={styles.signInTitle}>
            <h1 className={styles.signIntoYour}>Sign into your account</h1>
          </div>
          <UsernameField />
          <PasswordField />
          <div className={styles.loginButton}>
            <button
              className={styles.vectorParent}
              onClick={onGroupButtonClick}
            >
              <img
                className={styles.frameChild}
                alt=""
                src="/rectangle-4.svg"
              />
              <a className={styles.login1}>Login</a>
            </button>
          </div>
        </form>
        <div className={styles.registration}>
          <div className={styles.dontHaveAnyAccountParent}>
            <div
              className={styles.dontHaveAny}
            >{`Don’t have any account? `}</div>
            <u className={styles.register} onClick={onRegisterTextClick}>
              Register
            </u>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPhone8Plus;
