import { FunctionComponent, useCallback } from "react";
import styles from "./AppInfo.module.css";

export type AppInfoType = {
  className?: string;
};

const AppInfo: FunctionComponent<AppInfoType> = ({ className = "" }) => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "iPhone 8 Plus - 5" to the project
  }, []);

  return (
    <div className={[styles.appInfo, className].join(" ")}>
      <div className={styles.knowYourFoodAppParent}>
        <div className={styles.knowYourFood}>{`Know Your Food  App `}</div>
        <div className={styles.frameWrapper}>
          <div className={styles.wrapperImage2RemovebgPreParent}>
            <div className={styles.wrapperImage2RemovebgPre}>
              <img
                className={styles.image2RemovebgPreview1Icon}
                loading="lazy"
                alt=""
                src="/image--2-removebgpreview-1@2x.png"
              />
            </div>
            <div className={styles.text}>{` `}</div>
          </div>
        </div>
      </div>
      <div className={styles.appInfoInner}>
        <div className={styles.vectorParent} onClick={onGroupContainerClick}>
          <img className={styles.frameChild} alt="" src="/rectangle-4.svg" />
          <div className={styles.scan}>{`Scan `}</div>
        </div>
      </div>
    </div>
  );
};

export default AppInfo;
