import { FolderList } from "@/services/types";
import { createSlice } from "@reduxjs/toolkit";
import { getFolder, postFolder, putFolder } from "../actions/folder";

const initialState: { data: FolderList[]; status: any; selectedFolder: string; selectedFolderId: number } = {
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
    setSelectedFolder: (state, action) => {
      state.selectedFolder = action.payload.selectedFolder;
      state.selectedFolderId = action.payload.selectedFolderId;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFolder.pending, (state, action) => {})
      .addCase(getFolder.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getFolder.rejected, (state, action) => {})
      .addCase(postFolder.fulfilled, (state, action) => {
        state.data = [...state.data, action.payload[0]];
      })
      .addCase(putFolder.fulfilled, (state, action) => {
        state.status = action.payload;
      });
  },
});

export const { initialFolderStatus, setSelectedFolder } = folderSlice.actions;

export default folderSlice.reducer;
