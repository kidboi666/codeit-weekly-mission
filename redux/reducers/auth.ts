import { createSlice } from "@reduxjs/toolkit";
import { checkEmailAccess, loginAccess, logoutAccess, signUpAccess, userInfoAccess } from "../actions/auth";
import { UserData } from "@/services/types";

const initialState: {
  isLoggedIn: boolean;
  status: any;
  accessToken: string;
  refreshToken: string;
  userInfo: UserData;
} = {
  isLoggedIn: false,
  status: null,
  accessToken: "",
  refreshToken: "",
  userInfo: {
    id: 0,
    createdAt: "",
    name: "",
    imageSource: "",
    email: "",
    authId: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAccess.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.refreshToken = action.payload.data.refreshToken;
        state.accessToken = action.payload.data.accessToken;
      })
      .addCase(logoutAccess.fulfilled, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(checkEmailAccess.fulfilled, (state, action) => {
        state.status = action.payload;
      })
      .addCase(checkEmailAccess.rejected, (state, action) => {
        state.status = action.payload;
      })
      .addCase(signUpAccess.fulfilled, (state, action) => {
        state.accessToken = action.payload.data.accessToken;
        state.refreshToken = action.payload.data.refreshToken;
      })
      .addCase(userInfoAccess.fulfilled, (state, action) => {
        state.userInfo = action.payload.data[0];
      })
      .addCase(userInfoAccess.rejected, (state, action) => {
        state.status = action.payload;
      });
  },
});

export default authSlice.reducer;
