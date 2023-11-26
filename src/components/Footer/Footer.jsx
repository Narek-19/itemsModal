import { Button } from "antd";
import { TotalInfo } from "../TotalInfo/TotalInfo";
import styles from "./style.module.css";

export const Footer = ({ toggleModal, disabled }) => {
  return (
    <div className={styles.footer}>
      <div>
        <TotalInfo />
      </div>
      <div className={styles.buttonContainer}>
        <Button
          onClick={toggleModal}
          style={{
            color: "red",
            fontSize: "12px",
            display: "flex",
            justifyContent: "start",
          }}
          type="text"
        >
          Cancel
        </Button>
        <Button
          disabled={disabled}
          classes={{}}
          style={{
            background: disabled ? "#b3bac5" : "#3b4e67",
            padding: "2px 40px",
            fontSize: "12px",
          }}
          type="primary"
        >
          Add
        </Button>
      </div>
    </div>
  );
};
