import { useRef, useState } from "react";
import { FileAddOutlined } from "@ant-design/icons";
import { Select, Button } from "antd";

import styles from "./style.module.css";

const options = [
  { value: "jack", label: "Jack ARM753050" },
  { value: "lucy", label: "Lucy ARM755050" },
  { value: "tom", label: "Tom ARM753080" },
];
export const UserInfo = () => {
  const fileUploader = useRef(null);
  const [file, setFile] = useState(null);

  const onChangeFile = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const file = event.target.files[0];
    setFile(file);
  };

  const handleUploadFile = (e) => {
    fileUploader.current.click();
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Select
            className={styles.selectComponent}
            size="middle"
            defaultValue={options[0].label}
            options={options}
          />
        </div>
        <Button
          onClick={handleUploadFile}
          className={styles.atachFile}
          type="primary"
          style={{ border: "1px dashed #e9e9e9", color: "#656565" }}
          icon={<FileAddOutlined style={{ color: "gray" }} />}
          size="middle"
          ghost
        >
          {file?.name ? file.name : "Attach invoice"}
        </Button>
        <input
          type="file"
          id="file"
          accept="image/*, .pdf, text/plain"
          ref={fileUploader}
          onChange={onChangeFile}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};
