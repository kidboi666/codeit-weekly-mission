import { UserData } from "@/services/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { userInfo: UserData } = {
  userInfo: {
    id: 0,
    createdAt: "",
    name: "",
    imageSource: "",
    email: "",
    authId: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    login: (state, action) => {},
    logout: (state, action) => {},
  },
});

export const { getUserInfo, login, logout } = userSlice.actions;

export default userSlice.reducer;
