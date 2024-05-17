import { createSlice } from "@reduxjs/toolkit";

interface Props {
  type: any;
  isOpen: boolean;
}

const initialState: Props = {
  type: "",
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.type = action.payload;
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
