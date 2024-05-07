import { FolderList } from "@/services/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { data: FolderList[] } = {
  data: [],
};

const folderSlice = createSlice({
  name: "folder",
  initialState,
  reducers: {
    getFolder: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getFolder } = folderSlice.actions;

export default folderSlice.reducer;
