import axiosInstance from "@/services/axiosInstace";
import { FolderList } from "@/services/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import camelcaseKeys from "camelcase-keys";

export const getFolder = createAsyncThunk<FolderList[], number>("folder/getFolder", async (id) => {
  const { data } = await axiosInstance.get(`users/${id}/folders`);
  return camelcaseKeys(data.data, { deep: true });
});

export const postFolder = createAsyncThunk<any, { folderName: string; token: string | null }>(
  "folder/postFolder",
  async ({ folderName, token }) => {
    const { data } = await axiosInstance({
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

export const getSharedFolder = createAsyncThunk<any, number>(
  "link/getSharedFolder",
  async (folderId) => {
    const { data } = await axiosInstance.get(`folders/${folderId}`);
    return camelcaseKeys(data.data, { deep: true });
  },
);

export const putFolder = createAsyncThunk<
  any,
  { folderName: string; folderId: number; accessToken: string | null }
>("folder/putFolder", async ({ folderName, folderId, accessToken }) => {
  const { data } = await axiosInstance({
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
});

export const deleteFolder = createAsyncThunk<any, { folderId: number; accessToken: string | null }>(
  "folder/deleteFolder",
  async ({ folderId, accessToken }) => {
    const { data } = await axiosInstance({
      method: "delete",
      url: `folders/${folderId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  },
);
