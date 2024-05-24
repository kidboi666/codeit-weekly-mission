import { createSlice } from "@reduxjs/toolkit";

interface Props {
  type: any;
  isOpen: boolean;
  props?: Record<string, any>;
}

const initialState: Props = {
  type: "",
  isOpen: false,
  props: {},
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.type = action.payload.type;
      state.props = action.payload.props || {};
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.type = null;
      state.props = {};
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
