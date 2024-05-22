import { FolderList, SharedFolder } from "@/services/types";
import { createSlice } from "@reduxjs/toolkit";
import { deleteFolder, getFolder, getSharedFolder, postFolder, putFolder } from "../actions/folder";
import { API_MSG } from "@/constants/strings";

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
} = {
  data: [],
  status: "",
  sharedFolder: { ...initialSharedFolder },
};

const folderSlice = createSlice({
  name: "folder",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFolder.pending, (state) => {
        state.status = API_MSG.PEN;
      })
      .addCase(getFolder.fulfilled, (state, action) => {
        state.data = action.payload;
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

export const {} = folderSlice.actions;

export default folderSlice.reducer;
