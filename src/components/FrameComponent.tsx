import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <form className={[styles.detailsHeaderParent, className].join(" ")}>
      <div className={styles.detailsHeader}>
        <h2 className={styles.enterYourDeatils}>{`Enter your deatils `}</h2>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <input
            className={styles.nameInputLabel}
            placeholder="Enter Your Name"
            type="text"
          />
          <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <input
            className={styles.usernameLabel}
            placeholder="Create username"
            type="text"
          />
          <img className={styles.image1Icon1} alt="" src="/image-1@2x.png" />
        </div>
      </div>
      <div className={styles.passwordInputWrapper}>
        <div className={styles.passwordInput}>
          <div className={styles.passwordInputFields}>
            <div className={styles.passwordInputFieldsChild} />
            <input
              className={styles.createPassword}
              placeholder="Create Password"
              type="text"
            />
            <img className={styles.image11} alt="" src="/image-1-1@2x.png" />
          </div>
          <div className={styles.passwordInputInner}>
            <button
              className={styles.vectorParent}
              onClick={onGroupButtonClick}
            >
              <img
                className={styles.frameInner}
                alt=""
                src="/rectangle-4.svg"
              />
              <div className={styles.submit}>{`Submit `}</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.loginLinkWrapper}>
        <div className={styles.loginLink}>
          <div className={styles.alreadyHaveAn}>Already have an account.</div>
          <u className={styles.signIn} onClick={onGroupButtonClick}>
            Sign in
          </u>
        </div>
      </div>
    </form>
  );
};

export default FrameComponent;
