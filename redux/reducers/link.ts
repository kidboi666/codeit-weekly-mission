import { Link } from "@/services/types";
import { createSlice } from "@reduxjs/toolkit";
import { getLinkList, getAllLinkList, postLink } from "../actions/link";

const initialState: { data: Link[]; status: any; searchKeyword: string; searchResult: Link[] | string[] } = {
  data: [],
  status: "",
  searchKeyword: "",
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
      state.searchKeyword = action.payload;
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
        state.data = [...state.data, action.payload[0]];
      });
  },
});

export const { setSearchResult, setSearchKeyword } = linkSlice.actions;
export default linkSlice.reducer;
