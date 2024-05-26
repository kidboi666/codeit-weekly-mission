import { createSlice } from "@reduxjs/toolkit";
import { getMemo, postMemo } from "../actions/memo";
import { API_MSG } from "@/src/constants/strings";

const initialState = {
  data: [],
  status: "",
};

const memoSlice = createSlice({
  name: "memo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMemo.pending, (state) => {
        state.status = API_MSG.PEN;
      })
      .addCase(getMemo.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = API_MSG.FUL;
      })
      .addCase(getMemo.rejected, (state) => {
        state.status = API_MSG.REJ;
      })
      .addCase(postMemo.pending, (state) => {
        state.status = API_MSG.PEN;
      })
      .addCase(postMemo.fulfilled, (state) => {
        state.status = API_MSG.FUL;
      })
      .addCase(postMemo.rejected, (state) => {
        state.status = API_MSG.REJ;
      });
  },
});

export default memoSlice.reducer;
