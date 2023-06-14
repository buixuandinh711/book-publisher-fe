import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartState {
  isModalOpen: boolean;
  recentAdded?: {
    itemId: string;
    name: string;
  };
}

const initialState: CartState = { isModalOpen: false };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCartModal: (state, action: PayloadAction<{ itemId: string; name: string }>) => {
      state.isModalOpen = true;
      state.recentAdded = action.payload;
    },
    closeCartModal: (state) => {
      state.isModalOpen = false;
      state.recentAdded = undefined;
    },
  },
});

export const { openCartModal, closeCartModal } = cartSlice.actions;
