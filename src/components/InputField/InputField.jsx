import { InfoCircleOutlined } from '@ant-design/icons';
import { Input, Tooltip } from 'antd';
import styles from "./style.module.css";

export const InputField = ({
  placeholder,
  withInfo = true,
  onChange,
  name,
  width
}) => {
  return (
    <Input
      className={styles.inputField}
      name={name}
      style={{ width: width }}
      onChange={onChange}
      placeholder={placeholder}
      suffix={
        withInfo && (
          <Tooltip title="Extra information">
            <InfoCircleOutlined
              style={{
                color: "rgba(0,0,0,.45)",
              }}
            />
          </Tooltip>
        )
      }
    />
  );
};
