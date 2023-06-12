import { createSlice } from "@reduxjs/toolkit";

const initialState: { isModalOpen: boolean } = { isModalOpen: false };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCartModal: (state) => {
      state.isModalOpen = true;
    },
    closeCartModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { openCartModal, closeCartModal } = cartSlice.actions;
