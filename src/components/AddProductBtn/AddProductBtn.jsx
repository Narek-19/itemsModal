import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addProductItem } from "../../features/productSlice";

export const AddProductBtn = () => {
  const dispatch = useDispatch();
  const addProduct = () => {
    dispatch(addProductItem());
  };
  return (
    <Button
      onClick={addProduct}
      style={{ background: "#3b4e67", fontSize: "11px", borderRadius: "7px" }}
      type="primary"
      icon={<PlusOutlined />}
      size="small"
    >
      Add product
    </Button>
  );
};
