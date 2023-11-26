import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productItems: [],
  totalPrice: 0,
};

export const selectProductItems = (state) => {
  return state.product.productItems;
};

export const selectItemsCount = (state) => {
  return state.product.productItems.length ?? 0;
};

export const selectTotalPrice = (state) => {
  let totalPrice = 0;
  state.product.productItems.forEach((product) => {
    totalPrice += product.pTotal;
  });

  return totalPrice;
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProductItem: (state) => {
      const updateList = [
        ...state.productItems,
        {
          id: Math.random() * 100,
          pName: "",
          pDescription: "",
          pLink: "",
          pQtn: 0,
          pCost: 0,
          pTotal: 0,
        },
      ];
      state.productItems = updateList;
    },
    deleteProductItem: (state, x) => {
      const newData = state.productItems.filter((p) => {
        return p.id !== x.payload;
      });
      state.productItems = newData;
    },
    inputChange: (state, action) => {
      const newData = state.productItems.map((p) => {
        const mappedVal = { ...p };
        if (p.id === action.payload.id) {
          if (action.payload.inputName === "pQtn") {
            mappedVal.pTotal = action.payload.value * p.pCost;
          }
          if (action.payload.inputName === "pCost") {
            mappedVal.pTotal = action.payload.value * p.pQtn;
          }
          mappedVal[action.payload.inputName] = action.payload.value;
        }
        return mappedVal;
      });
      state.productItems = newData;
    },
  },
});

export const { addProductItem, deleteProductItem, inputChange } =
  productSlice.actions;

export default productSlice.reducer;
