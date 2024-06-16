import { FunctionComponent } from "react";
import Group1Default from "./Group1Default";
import styles from "./UsernameField.module.css";

export type UsernameFieldType = {
  className?: string;
};

const UsernameField: FunctionComponent<UsernameFieldType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.usernameField, className].join(" ")}>
      <Group1Default />
    </div>
  );
};

export default UsernameField;
