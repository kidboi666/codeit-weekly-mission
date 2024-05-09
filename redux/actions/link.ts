import { axiosInstance as axios } from "@/services/axiosInstace";
import { Link } from "@/services/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import camelcaseKeys from "camelcase-keys";

export const getLinkList = createAsyncThunk<Link[], { userId: number; folderId: number }>(
  "link/getLinkList",
  async ({ userId, folderId }) => {
    const { data } = await axios.get(`users/${userId}/links?folderId=${folderId}`);
    return camelcaseKeys(data.data, { deep: true });
  },
);

export const getAllLinkList = createAsyncThunk<Link[], number>("link/getLink", async (userId) => {
  const { data } = await axios.get(`users/${userId}/links`);
  return camelcaseKeys(data.data, { deep: true });
});
