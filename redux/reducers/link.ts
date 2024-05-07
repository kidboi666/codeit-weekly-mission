import { Link } from "@/services/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { data: Link[] } = {
  data: [],
};

const linkSlice = createSlice({
  name: "link",
  initialState,
  reducers: {
    getLinks: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getLinks } = linkSlice.actions;

export default linkSlice.reducer;
