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

const dropDownSlice = createSlice({
  name: "dropDown",
  initialState,
  reducers: {
    openDropDown: (state, action) => {
      state.contents.type = action.payload;
      state.isOpen = true;
    },
    closeDropDown: (state) => {
      state.isOpen = false;
    },
    putContents: (state, action) => {
      state.contents = action.payload;
    },
  },
});

export const { openDropDown, closeDropDown, putContents } = dropDownSlice.actions;

export default dropDownSlice.reducer;
