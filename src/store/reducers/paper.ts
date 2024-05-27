import { createSlice } from "@reduxjs/toolkit";
import { getPaper, postPaper } from "../actions/paper";
import { API_MSG } from "@/src/constants/strings";

const initialState = {
  data: [],
  status: "",
};

const paperSlice = createSlice({
  name: "paper",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPaper.pending, (state) => {
        state.status = API_MSG.PEN;
      })
      .addCase(getPaper.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = API_MSG.FUL;
      })
      .addCase(getPaper.rejected, (state) => {
        state.status = API_MSG.REJ;
      })
      .addCase(postPaper.pending, (state) => {
        state.status = API_MSG.PEN;
      })
      .addCase(postPaper.fulfilled, (state) => {
        state.status = API_MSG.FUL;
      })
      .addCase(postPaper.rejected, (state) => {
        state.status = API_MSG.REJ;
      });
  },
});

export default paperSlice.reducer;
