import { createSlice } from "@reduxjs/toolkit";

interface Props {
  contents: {
    type: string;
    title: string;
    text: string;
    variant?: string;
  };
  component: string;
  isOpen: boolean;
}

const initialState: Props = {
  contents: {
    type: "",
    title: "",
    text: "",
    variant: "",
  },
  component: "",
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.contents.type = action.payload;
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    putContents: (state, action) => {
      state.contents = action.payload;
    },
  },
});

export const { openModal, closeModal, putContents } = modalSlice.actions;

export default modalSlice.reducer;
