import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone8Plus3.module.css";

export type IPhone8Plus3Type = {
  className?: string;
};

const IPhone8Plus3: FunctionComponent<IPhone8Plus3Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onBackgroundClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={[styles.iphone8Plus2, className].join(" ")}>
      <img className={styles.iphone8Plus2Child} alt="" src="/group-2@2x.png" />
      <button className={styles.backgroundParent}>
        <div className={styles.background} onClick={onBackgroundClick} />
        <div className={styles.start}>START</div>
      </button>
    </div>
  );
};

export default IPhone8Plus3;
