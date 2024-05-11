import { FolderList } from "@/services/types";
import { createSlice } from "@reduxjs/toolkit";
import { deleteFolder, getFolder, postFolder, putFolder } from "../actions/folder";
import { API_MSG, COMBINED_FOLDER_NAME } from "@/constants/strings";

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
      .addCase(getFolder.pending, (state) => {
        state.status = API_MSG.PEN;
      })
      .addCase(getFolder.fulfilled, (state, action) => {
        state.data = action.payload;
        state.selectedFolder = COMBINED_FOLDER_NAME;
        state.status = API_MSG.FUL;
      })
      .addCase(getFolder.rejected, (state, action) => {
        state.status = API_MSG.REJ;
      })
      .addCase(postFolder.pending, (state) => {
        state.status = API_MSG.PEN;
      })
      .addCase(postFolder.fulfilled, (state, action) => {
        state.data = [...state.data, action.payload[0]];
        state.status = API_MSG.FUL;
      })
      .addCase(postFolder.rejected, (state, action) => {
        state.status = API_MSG.REJ;
      })
      .addCase(putFolder.pending, (state) => {
        state.status = API_MSG.PEN;
      })
      .addCase(putFolder.fulfilled, (state, action) => {
        state.status = API_MSG.FUL;
      })
      .addCase(putFolder.rejected, (state, action) => {
        state.status = API_MSG.REJ;
      })
      .addCase(deleteFolder.pending, (state) => {
        state.status = API_MSG.PEN;
      })
      .addCase(deleteFolder.fulfilled, (state, action) => {
        state.status = API_MSG.FUL;
      })
      .addCase(deleteFolder.rejected, (state, action) => {
        state.status = API_MSG.REJ;
      });
  },
});

export const { initializeSelectedFolder, setSelectedFolder } = folderSlice.actions;

export default folderSlice.reducer;
