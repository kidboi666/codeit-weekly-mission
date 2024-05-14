import { axiosInstance as axios } from "@/services/axiosInstace";
import { createAsyncThunk } from "@reduxjs/toolkit";
import camelcaseKeys from "camelcase-keys";

export const loginAccess = createAsyncThunk<any, { email: string; password: string }>(
  "user/login",
  async ({ email, password }) => {
    const { data } = await axios({
      method: "post",
      url: `sign-in`,
      data: {
        email: email,
        password: password,
      },
    });

    return data;
  },
);

export const checkEmailAccess = createAsyncThunk<any, string>("user/checkEmail", async (email) => {
  const { data } = await axios({
    method: "post",
    url: `check-email`,
    data: {
      email: email,
    },
  });

  return data;
});

export const signUpAccess = createAsyncThunk<any, { email: string; pw: string }>(
  "user/signUp",
  async ({ email, pw }) => {
    const { data } = await axios({
      method: "post",
      url: `sign-up`,
      data: {
        email: email,
        password: pw,
      },
    });

    return data;
  },
);

export const userInfoAccess = createAsyncThunk<any, string | null>("user/userInfo", async (token) => {
  const { data } = await axios({
    method: "get",
    url: `users`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return camelcaseKeys(data, { deep: true });
});
