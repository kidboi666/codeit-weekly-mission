import { Link } from "@/services/types";
import { createSlice } from "@reduxjs/toolkit";
import { getLinkList, getAllLinkList } from "../actions/link";

const initialState: { data: Link[]; status: string } = {
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

export default linkSlice.reducer;
