import { FolderList, SharedFolder } from "@/services/types";
import { createSlice } from "@reduxjs/toolkit";
import { deleteFolder, getFolder, getSharedFolder, postFolder, putFolder } from "../actions/folder";
import { API_MSG, COMBINED_FOLDER_NAME } from "@/constants/strings";

const initialSharedFolder = {
  id: 0,
  createdAt: "",
  name: "",
  userId: 0,
  favorite: false,
};

const initialState: {
  data: FolderList[];
  status: string;
  sharedFolder: SharedFolder;
  selectedFolder: string;
  selectedFolderId: number;
  selectedFolderForAddLink: string;
  selectedFolderIdForAddLink: number;
} = {
  data: [],
  status: "",
  sharedFolder: { ...initialSharedFolder },
  selectedFolder: "",
  selectedFolderId: 0,
  selectedFolderForAddLink: "",
  selectedFolderIdForAddLink: 0,
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
    setSelectedFolderForAddLink: (state, action) => {
      state.selectedFolderForAddLink = action.payload.selectedFolder;
      state.selectedFolderIdForAddLink = action.payload.selectedFolderId;
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
      })
      .addCase(getSharedFolder.pending, (state, action) => {
        state.status = API_MSG.PEN;
      })
      .addCase(getSharedFolder.fulfilled, (state, action) => {
        state.status = API_MSG.FUL;
        state.sharedFolder = action.payload[0];
      })
      .addCase(getSharedFolder.rejected, (state, action) => {
        state.status = API_MSG.REJ;
      });
  },
});

export const { initializeSelectedFolder, setSelectedFolder, setSelectedFolderForAddLink } =
  folderSlice.actions;

export default folderSlice.reducer;
