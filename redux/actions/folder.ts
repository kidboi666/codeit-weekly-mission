import { axiosInstance as axios } from "@/services/axiosInstace";
import { FolderList } from "@/services/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import camelcaseKeys from "camelcase-keys";

export const getFolder = createAsyncThunk<FolderList[]>("folder/getFolder", async () => {
  const { data } = await axios.get(`users/1/folders`);
  return camelcaseKeys(data.data, { deep: true });
});
