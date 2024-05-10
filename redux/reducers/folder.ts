import { FolderList } from "@/services/types";
import { createSlice } from "@reduxjs/toolkit";
import { deleteFolder, getFolder, postFolder, putFolder } from "../actions/folder";
import { COMBINED_FOLDER_NAME } from "@/constants/strings";

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
    initializeSelectedFolder: (state) => {
      state.selectedFolder = COMBINED_FOLDER_NAME;
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
      })
      .addCase(deleteFolder.fulfilled, (state, action) => {
        state.status = action.payload;
      });
  },
});

export const { initializeSelectedFolder, setSelectedFolder } = folderSlice.actions;

export default folderSlice.reducer;
