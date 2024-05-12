import { axiosInstance as axios } from "@/services/axiosInstace";
import { FolderList } from "@/services/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import camelcaseKeys from "camelcase-keys";

export const getFolder = createAsyncThunk<FolderList[], number>("folder/getFolder", async (id) => {
  const { data } = await axios.get(`users/${id}/folders`);
  return camelcaseKeys(data.data, { deep: true });
});

export const postFolder = createAsyncThunk<any, { folderName: string; token: string | null }>(
  "folder/postFolder",
  async ({ folderName, token }) => {
    const { data } = await axios({
      method: "post",
      url: `folders`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        name: folderName,
      },
    });

    return camelcaseKeys(data.data, { deep: true });
  },
);

export const putFolder = createAsyncThunk<any, { folderName: string; folderId: number; accessToken: string | null }>(
  "folder/putFolder",
  async ({ folderName, folderId, accessToken }) => {
    const { data } = await axios({
      method: "put",
      url: `folders/${folderId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        name: folderName,
      },
    });

    return camelcaseKeys(data.data, { deep: true });
  },
);

export const deleteFolder = createAsyncThunk<any, { folderId: number; accessToken: string | null }>(
  "folder/deleteFolder",
  async ({ folderId, accessToken }) => {
    const { data } = await axios({
      method: "delete",
      url: `folders/${folderId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  },
);
