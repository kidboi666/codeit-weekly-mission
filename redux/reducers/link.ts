import { Link } from "@/services/types";
import { createSlice } from "@reduxjs/toolkit";
import { getLinkList, getAllLinkList } from "../actions/link";

const initialState: { data: Link[]; status: string; search: string; searchResult: Link[] } = {
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
      state.data = action.payload;
      state.searchResult = action.payload;
    },
    setSearchKeyword: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLinkList.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(getLinkList.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "Complete";
      })
      .addCase(getLinkList.rejected, (state, action) => {
        state.status = "Fail";
      })
      .addCase(getAllLinkList.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(getAllLinkList.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "Complete";
      })
      .addCase(getAllLinkList.rejected, (state, action) => {
        state.status = "Fail";
      });
  },
});

export const { setSearchResult, setSearchKeyword } = linkSlice.actions;
export default linkSlice.reducer;
