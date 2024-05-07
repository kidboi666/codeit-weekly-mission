import { createSlice } from "@reduxjs/toolkit";

export const folderSlice = createSlice({
  name: "folder",
  initialState: [],
  reducers: {
    getAllFolderList: (state, action) => {
      state = action.payload;
    },
  },
});

export const { getAllFolderList } = folderSlice.actions;

export default folderSlice.reducer;
