import { axiosInstance as axios } from "@/services/axiosInstace";
import { Link } from "@/services/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import camelcaseKeys from "camelcase-keys";

export const getLinkList = createAsyncThunk<Link[], number>("link/getLinkList", async (id) => {
  const { data } = await axios.get(`users/1/links?folderId=${id}`);
  return camelcaseKeys(data.data, { deep: true });
});

export const getAllLinkList = createAsyncThunk<Link[]>("link/getLink", async () => {
  const { data } = await axios.get(`users/1/links`);
  return camelcaseKeys(data.data, { deep: true });
});
