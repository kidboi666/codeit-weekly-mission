import { Link } from "@/services/types";
import { createSlice } from "@reduxjs/toolkit";
import { getLinkList, getAllLinkList, postLink } from "../actions/link";

const initialState: {
  data: Link[];
  status: any;
  searchKeyword: string;
  searchResult: Link[];
  noSearchResult: boolean | null;
} = {
  data: [],
  status: "",
  searchKeyword: "",
  searchResult: [],
  noSearchResult: null,
};

const linkSlice = createSlice({
  name: "link",
  initialState,
  reducers: {
    initializeSearch: (state) => {
      state.searchKeyword = "";
      state.searchResult = [];
      state.noSearchResult = null;
    },
    setSearchResult: (state, action) => {
      state.searchResult = action.payload;
      state.noSearchResult = action.payload.length === 0;
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
        state.data = [action.payload[0], ...state.data];
      });
  },
});

export const { setSearchResult, setSearchKeyword, initializeSearch } = linkSlice.actions;
export default linkSlice.reducer;
