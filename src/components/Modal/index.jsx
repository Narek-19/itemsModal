import React, { useEffect } from "react";
import { Modal } from "antd";
import styles from "./style.module.css";

export const ProductModal = ({ children, title, Footer, open,toggleModal }) => {
  useEffect(() => {
    if (open) {
      const modalHeader = document.getElementsByClassName("ant-modal-header");
      const modalContent = document.getElementsByClassName("ant-modal-content");
      modalContent[0].style.backgroundColor = "#f9fafb";
      modalHeader[0].style.backgroundColor = "#f9fafb";
    }
  }, []);

  return (
    <Modal
      onCancel={toggleModal}
      style={{ top: 10 }}
      className={styles.modal}
      open={open}
      title={title}
      footer={Footer}
    >
      <div className={styles.modalContainer}>{children}</div>
    </Modal>
  );
};
