import { Link } from "@/services/types";
import { createSlice } from "@reduxjs/toolkit";
import { getLinkList, getAllLinkList, postLink, deleteLink } from "../actions/link";

interface Props {
  data: Link[];
  status: any;
  selectedLinkId: number;
  selectedLinkTitle: string;
  searchKeyword: string;
  searchResult: Link[];
  noSearchResult: boolean | null;
}

const initialState: Props = {
  data: [],
  status: "",
  selectedLinkId: 0,
  selectedLinkTitle: "",
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
    setSelectedLink: (state, action) => {
      state.selectedLinkId = action.payload.linkId;
      state.selectedLinkTitle = action.payload.linkTitle;
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
      })
      .addCase(deleteLink.fulfilled, (state, action) => {
        state.status = action.payload;
      });
  },
});

export const { setSearchResult, setSearchKeyword, initializeSearch, setSelectedLink } = linkSlice.actions;
export default linkSlice.reducer;
