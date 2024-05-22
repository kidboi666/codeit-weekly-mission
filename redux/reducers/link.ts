import { Link } from "@/services/types";
import { createSlice } from "@reduxjs/toolkit";
import { getLinkList, getAllLinkList, postLink, deleteLink, putFavoriteLink } from "../actions/link";
import { API_MSG } from "@/constants/strings";

interface Props {
  data: Link[];
  status: string;
}

const initialState: Props = {
  data: [],
  status: "",
};

const linkSlice = createSlice({
  name: "link",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLinkList.pending, (state, action) => {
        state.status = API_MSG.PEN;
      })
      .addCase(getLinkList.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = API_MSG.FUL;
      })
      .addCase(getLinkList.rejected, (state, action) => {
        state.status = API_MSG.REJ;
      })
      .addCase(getAllLinkList.pending, (state, action) => {
        state.status = API_MSG.PEN;
      })
      .addCase(getAllLinkList.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = API_MSG.FUL;
      })
      .addCase(getAllLinkList.rejected, (state, action) => {
        state.status = API_MSG.REJ;
      })
      .addCase(postLink.pending, (state, action) => {
        state.status = API_MSG.PEN;
      })
      .addCase(postLink.fulfilled, (state, action) => {
        state.status = API_MSG.FUL;
      })
      .addCase(postLink.rejected, (state, action) => {
        state.status = API_MSG.REJ;
      })
      .addCase(deleteLink.pending, (state, action) => {
        state.status = API_MSG.PEN;
      })
      .addCase(deleteLink.fulfilled, (state, action) => {
        state.status = API_MSG.FUL;
      })
      .addCase(deleteLink.rejected, (state, action) => {
        state.status = API_MSG.REJ;
      })
      .addCase(putFavoriteLink.pending, (state, action) => {
        state.status = API_MSG.PEN;
      })
      .addCase(putFavoriteLink.fulfilled, (state, action) => {
        state.status = API_MSG.FUL;
      })
      .addCase(putFavoriteLink.rejected, (state, action) => {
        state.status = API_MSG.REJ;
      });
  },
});

export const {} = linkSlice.actions;
export default linkSlice.reducer;
