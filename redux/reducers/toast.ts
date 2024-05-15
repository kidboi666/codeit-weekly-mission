import { createSlice } from "@reduxjs/toolkit";

interface Props {
  contents: {
    type: string;
    text: string;
  };
  isOpen: boolean;
}

const initialState: Props = {
  contents: {
    type: "",
    text: "",
  },
  isOpen: false,
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    openToast: (state, action) => {
      state.contents.type = action.payload;
      state.isOpen = true;
    },
    closeToast: (state) => {
      state.isOpen = false;
    },
    putContents: (state, action) => {
      state.contents = action.payload;
    },
  },
});

export const { openToast, closeToast, putContents } = toastSlice.actions;

export default toastSlice.reducer;
