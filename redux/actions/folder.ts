import { axiosInstance as axios } from "@/services/axiosInstace";
import { FolderList } from "@/services/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import camelcaseKeys from "camelcase-keys";

export const getFolder = createAsyncThunk<FolderList[], number>("folder/getFolder", async (id) => {
  const { data } = await axios.get(`users/${id}/folders`);
  return camelcaseKeys(data.data, { deep: true });
});

export const postFolder = createAsyncThunk<any, { folderName: string; token: string }>(
  "folder/postFolder",
  async ({ folderName, token }) => {
    const { data } = await axios({
      method: "post",
      url: `folders`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        name: folderName,
      },
    });

    return data;
  },
);
