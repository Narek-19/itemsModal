import { useSelector } from "react-redux";
import { FileDoneOutlined, FileProtectOutlined } from "@ant-design/icons";
import { selectItemsCount, selectTotalPrice } from "../../features/productSlice";
import styles from "./style.module.css";

export const TotalInfo = () => {
  const producItemsCount = useSelector(selectItemsCount);
  const priceTotal = useSelector(selectTotalPrice);
  return (
    <div className={styles.container}>
      <div className={styles.totalPrice}>
        <div className={styles.iconContainer}>
          <div className={styles.iconBox}>
            <FileProtectOutlined className={styles.iconPrice} />
          </div>
          <div className={styles.infoText}>
            <div className={styles.text}>Total price</div>
            <div>{priceTotal}$</div>
          </div>
        </div>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.iconBox}>
          <FileDoneOutlined className={styles.iconTotal} />
        </div>
        <div className={styles.infoText}>
          <div className={styles.text}>Total Items</div>
          <div>{producItemsCount}</div>
        </div>
      </div>
    </div>
  );
};
