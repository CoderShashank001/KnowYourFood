import { FunctionComponent } from "react";
import AppInfo from "../components/AppInfo";
import styles from "./IPhone8Plus1.module.css";

const IPhone8Plus1: FunctionComponent = () => {
  return (
    <div className={styles.iphone8Plus4}>
      <main className={styles.backgroundParent}>
        <section className={styles.background} />
        <div className={styles.c3dccec9B5e047089688E4328dWrapper}>
          <img
            className={styles.c3dccec9B5e047089688E4328dIcon}
            alt=""
            src="/c3dccec9b5e047089688e4328dd6d4b9removebgpreview-1@2x.png"
          />
        </div>
        <div className={styles.welcome}>{`Welcome  `}</div>
      </main>
      <AppInfo />
    </div>
  );
};

export default IPhone8Plus1;
