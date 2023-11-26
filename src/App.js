import { useEffect, useRef, useState } from "react";
import { FormContainer } from "./components/FormContainer/FormContainer";
import { ProductModal } from "./components/Modal";
import { AddProductBtn } from "./components/AddProductBtn/AddProductBtn";
import { useSelector } from "react-redux";
import { selectProductItems } from "./features/productSlice";
import { Footer } from "./components/Footer/Footer";
import styles from "./App.module.css";

import { UserInfo } from "./components/UserInfo/UserInfo";

function App() {
  const ref = useRef();
  const [newProduct, setNewProduct] = useState(false);
  const [openModal, setModalOpen] = useState(false);
  const products = useSelector(selectProductItems);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  useEffect(() => {
    if (newProduct) {
      ref?.current.scrollIntoView();
      setNewProduct(false);
    }
  }, [products]);

  return (
    <div>
      <h2 className={styles.header} onClick={toggleModal}>
        Click here Add Product Items
      </h2>
      <ProductModal
        toggleModal={toggleModal}
        open={openModal}
        title="Declare"
        Footer={
          <div className={styles.modalFooter}>
            <div
              onClick={() => setNewProduct(true)}
              className={styles.addProductBtn}
            >
              <AddProductBtn />
            </div>
            <Footer
              toggleModal={toggleModal}
              disabled={products.length === 0}
            />
          </div>
        }
      >
        <UserInfo />
        <>
          {products.map((product, i) => {
            return (
              <div key={product.id}>
                <FormContainer {...product} num={i} />
              </div>
            );
          })}
          <div id="moveToBottom" ref={ref}></div>
        </>
      </ProductModal>
    </div>
  );
}

export default App;
