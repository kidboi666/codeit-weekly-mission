import { createSlice } from "@reduxjs/toolkit";
import { getMemo } from "../actions/memo";
import { API_MSG } from "@/src/constants/strings";

const initialState = {
  data: {},
  status: "",
};

const memoSlice = createSlice({
  name: "memo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMemo.pending, (state, action) => {
        state.status = API_MSG.PEN;
      })
      .addCase(getMemo.fulfilled, (state, action) => {
        // state.title = action.payload.title;
        // state.content = action.payload.content;
        state.data = action.payload;
        state.status = API_MSG.FUL;
      })
      .addCase(getMemo.rejected, (state, action) => {
        state.status = API_MSG.REJ;
      });
  },
});

export default memoSlice.reducer;
