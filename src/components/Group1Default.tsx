import { FunctionComponent } from "react";
import styles from "./Group1Default.module.css";

export type Group1DefaultType = {
  className?: string;
};

const Group1Default: FunctionComponent<Group1DefaultType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.group1default, className].join(" ")}>
      <div className={styles.usernameBackground} />
      <div className={styles.usernameLabel}>
        <div className={styles.username}>Username</div>
      </div>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
    </div>
  );
};

export default Group1Default;
