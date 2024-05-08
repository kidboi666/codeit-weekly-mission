import { axiosInstance as axios } from "@/services/axiosInstace";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginAccess = createAsyncThunk<any, { email: string; pw: string }>("user/login", async ({ email, pw }) => {
  const res = await axios({
    method: "post",
    url: `sign-in`,
    data: {
      email: email,
      password: pw,
    },
  });

  return res;
});

export const checkEmailAccess = createAsyncThunk<any, { email: string }>("user/checkEmail", async ({ email }) => {
  const res = await axios({
    method: "post",
    url: `check-email`,
    data: {
      email: email,
    },
  });

  return res;
});
