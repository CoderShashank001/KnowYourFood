import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import styles from "./IPhone8Plus2.module.css";

const IPhone8Plus2: FunctionComponent = () => {
  return (
    <div className={styles.iphone8Plus3}>
      <main className={styles.registrationBackgroundParent}>
        <section className={styles.registrationBackground} />
        <img
          className={styles.c3dccec9B5e047089688E4328dIcon}
          alt=""
          src="/c3dccec9b5e047089688e4328dd6d4b9removebgpreview-1@2x.png"
        />
        <div className={styles.registerWrapper}>
          <h2 className={styles.register}>Register</h2>
        </div>
      </main>
      <FrameComponent />
    </div>
  );
};

export default IPhone8Plus2;
