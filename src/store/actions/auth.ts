import axiosInstance from "@/src/services/axiosInstace";
import { createAsyncThunk } from "@reduxjs/toolkit";
import camelcaseKeys from "camelcase-keys";

export const loginAccess = createAsyncThunk<
  any,
  { email: string; password: string }
>("user/login", async ({ email, password }) => {
  const { data } = await axiosInstance({
    method: "post",
    url: `sign-in`,
    data: {
      email: email,
      password: password,
    },
  });

  return data;
});

export const checkEmailAccess = createAsyncThunk<any, string>(
  "user/checkEmail",
  async (email) => {
    const { data } = await axiosInstance.post(`check-email`, { email: email });
    return data;
  }
);

export const signUpAccess = createAsyncThunk<
  any,
  { email: string; password: string }
>("user/signUp", async ({ email, password }) => {
  const { data } = await axiosInstance({
    method: "post",
    url: `sign-up`,
    data: {
      email: email,
      password: password,
    },
  });

  return data;
});

export const userInfoAccess = createAsyncThunk("user/userInfo", async () => {
  const { data } = await axiosInstance.get(`users`);
  return camelcaseKeys(data.data, { deep: true });
});

export const getSharedUserInfo = createAsyncThunk<any, number>(
  "link/getSharedUserInfo",
  async (userId) => {
    const { data } = await axiosInstance.get(`users/${userId}`);
    return camelcaseKeys(data.data, { deep: true });
  }
);
