import { Link } from "@/services/types";
import { createSlice } from "@reduxjs/toolkit";
import { getLinkList, getAllLinkList, postLink } from "../actions/link";

const initialState: { data: Link[]; status: any; search: string; searchResult: Link[] } = {
  data: [],
  status: "",
  search: "",
  searchResult: [],
};

const linkSlice = createSlice({
  name: "link",
  initialState,
  reducers: {
    setSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
    setSearchKeyword: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLinkList.pending, (state, action) => {})
      .addCase(getLinkList.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getLinkList.rejected, (state, action) => {})
      .addCase(getAllLinkList.pending, (state, action) => {})
      .addCase(getAllLinkList.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getAllLinkList.rejected, (state, action) => {})
      .addCase(postLink.fulfilled, (state, action) => {
        state.status = action.payload;
      });
  },
});

export const { setSearchResult, setSearchKeyword } = linkSlice.actions;
export default linkSlice.reducer;
