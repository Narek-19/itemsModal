import { useDispatch } from "react-redux";
import { DeleteOutlined } from "@ant-design/icons";
import { InputField } from "../InputField/InputField";
import { inputChange } from "../../features/productSlice";
import { deleteProductItem } from "../../features/productSlice";

import styles from "./style.module.css";

export const FormContainer = (props) => {
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(deleteProductItem(props.id));
  };

  const handleInputChange = (e) => {
    let changeValue = e.target.value;
    if (e.target.name === "pQtn" || e.target.name === "pCost") {
      if (isNaN(+changeValue)) {
        changeValue = 0;
      } else {
        changeValue = +changeValue;
      }
    }
    dispatch(
      inputChange({
        value: changeValue,
        inputName: e.target.name,
        id: props.id,
      })
    );
  };

  const getItemNum = (num) => {
    if (num < 10) {
      num = `0${num}`;
    }
    return num;
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.detailsSection}>
        <div className={styles.sectionNum}>{getItemNum(props.num+1)}</div>
        <div onClick={deleteItem}>
          <DeleteOutlined style={{ color: "red", cursor: "pointer" }} />
        </div>
      </div>
      <div className={styles.formSection}>
        <InputField
          width="50%"
          onChange={handleInputChange}
          placeholder="Product Name"
          name="pName"
        />
        <InputField
          width="50%"
          onChange={handleInputChange}
          placeholder="Product Description"
          name="pDescription"
        />
      </div>
      <div>
        <div className={styles.formSection}>
          <InputField
            width="100%"
            onChange={handleInputChange}
            placeholder="Product Link"
            name="pLink"
          />
        </div>
      </div>
      <div className={styles.formSection}>
        <div className={styles.quantityField}>
          <InputField
            width="100%"
            name="pQtn"
            onChange={handleInputChange}
            withInfo={false}
            placeholder="Quantity"
          />
        </div>
        <div className={styles.costField}>
          <InputField
            width="100%"
            onChange={handleInputChange}
            placeholder="Cost"
            name="pCost"
          />
        </div>

        <div className={styles.totalField}>
          <div>
            <div>Total</div>
            <div>{props.pTotal}$</div>
          </div>
        </div>
      </div>
    </div>
  );
};
