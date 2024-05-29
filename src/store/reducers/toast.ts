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

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    openToast: (state, action) => {
      state.type = action.payload.type;
      state.props = action.payload.props || {};
      state.isOpen = true;
    },
    closeToast: (state) => {
      state.type = "";
      state.props = {};
      state.isOpen = false;
    },
  },
});

export const { openToast, closeToast } = toastSlice.actions;

export default toastSlice.reducer;
