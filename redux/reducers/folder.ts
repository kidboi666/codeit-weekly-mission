import { FolderList } from "@/services/types";
import { createSlice } from "@reduxjs/toolkit";
import { getFolder, postFolder } from "../actions/folder";

const initialState: { data: FolderList[]; status: string; selectedFolder: string; selectedFolderId: number } = {
  data: [],
  status: "",
  selectedFolder: "",
  selectedFolderId: 0,
};

const folderSlice = createSlice({
  name: "folder",
  initialState,
  reducers: {
    initialFolderStatus: (state) => {
      state.status = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFolder.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(getFolder.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "Complete";
      })
      .addCase(getFolder.rejected, (state, action) => {
        state.status = "Fail";
      })
      .addCase(postFolder.fulfilled, (state, action) => {
        state.status = "Complete";
      });
  },
});

export const { initialFolderStatus } = folderSlice.actions;

export default folderSlice.reducer;
