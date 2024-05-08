import { UserData } from "@/services/types";
import { createSlice } from "@reduxjs/toolkit";
import { checkEmailAccess, loginAccess } from "../actions/auth";

const initialState: { userInfo: UserData; isLoggedIn: boolean } = {
  userInfo: {
    id: 0,
    createdAt: "",
    name: "",
    imageSource: "",
    email: "",
    authId: "",
  },
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAccess.fulfilled, (state, action) => {
      state.isLoggedIn = true;
    });
  },
});

export const { getUserInfo } = userSlice.actions;

export default userSlice.reducer;
