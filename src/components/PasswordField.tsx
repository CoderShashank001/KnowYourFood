import { FunctionComponent } from "react";
import styles from "./PasswordField.module.css";

export type PasswordFieldType = {
  className?: string;
};

const PasswordField: FunctionComponent<PasswordFieldType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.passwordField, className].join(" ")}>
      <div className={styles.passwordInput}>
        <div className={styles.passwordLabel}>
          <input
            className={styles.passwordPlaceholder}
            placeholder="Password"
            type="text"
          />
          <img className={styles.image11} alt="" src="/image-1-1@2x.png" />
        </div>
        <div className={styles.forgotPassword}>
          <b className={styles.forgetPassword}>Forget Password?</b>
        </div>
      </div>
    </div>
  );
};

export default PasswordField;
