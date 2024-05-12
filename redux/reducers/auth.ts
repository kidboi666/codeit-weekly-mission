import { createSlice } from "@reduxjs/toolkit";
import { checkEmailAccess, loginAccess, signUpAccess, userInfoAccess } from "../actions/auth";
import { UserData } from "@/services/types";
import { API_MSG } from "@/constants/strings";

interface Props {
  isLoggedIn: boolean;
  status: string;
  accessToken: string;
  refreshToken: string;
  userInfo: UserData;
}
const initialUserInfo = {
  id: 0,
  createdAt: "",
  name: "",
  imageSource: "",
  email: "",
  authId: "",
};

const initialState: Props = {
  isLoggedIn: false,
  status: "",
  userInfo: { ...initialUserInfo },
  accessToken: "",
  refreshToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.accessToken = "";
      state.refreshToken = "";
      state.userInfo = initialUserInfo;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAccess.pending, (state, action) => {
        state.status = API_MSG.PEN;
      })
      .addCase(loginAccess.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.accessToken = action.payload.data.accessToken;
        state.refreshToken = action.payload.data.refreshToken;
        localStorage.setItem("accessToken", action.payload.data.accessToken);
        localStorage.setItem("refreshToken", action.payload.data.refreshToken);
        state.status = API_MSG.FUL;
      })
      .addCase(loginAccess.rejected, (state, action) => {
        state.status = API_MSG.REJ;
      })
      .addCase(checkEmailAccess.pending, (state, action) => {
        state.status = API_MSG.PEN;
      })
      .addCase(checkEmailAccess.fulfilled, (state, action) => {
        state.status = action.payload;
        state.status = API_MSG.FUL;
      })
      .addCase(checkEmailAccess.rejected, (state, action) => {
        state.status = API_MSG.REJ;
      })
      .addCase(signUpAccess.pending, (state, action) => {
        state.status = API_MSG.PEN;
      })
      .addCase(signUpAccess.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.accessToken = action.payload.data.accessToken;
        state.refreshToken = action.payload.data.refreshToken;
        localStorage.setItem("accessToken", action.payload.data.accessToken);
        localStorage.setItem("refreshToken", action.payload.data.refreshToken);
        state.status = API_MSG.FUL;
      })
      .addCase(signUpAccess.rejected, (state, action) => {
        state.status = API_MSG.REJ;
      })
      .addCase(userInfoAccess.pending, (state, action) => {
        state.status = API_MSG.PEN;
      })
      .addCase(userInfoAccess.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.userInfo = action.payload.data[0];
        state.status = API_MSG.FUL;
      })
      .addCase(userInfoAccess.rejected, (state, action) => {
        state.status = API_MSG.REJ;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
