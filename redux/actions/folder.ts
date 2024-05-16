import axiosInstance from "@/services/axiosInstace";
import { FolderList } from "@/services/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import camelcaseKeys from "camelcase-keys";

export const getFolder = createAsyncThunk<FolderList[], number>("folder/getFolder", async (id) => {
  const { data } = await axiosInstance.get(`users/${id}/folders`);
  return camelcaseKeys(data.data, { deep: true });
});

export const postFolder = createAsyncThunk<any, string>("folder/postFolder", async (folderName) => {
  const { data } = await axiosInstance.post(`folders`, { name: folderName });
  return camelcaseKeys(data.data, { deep: true });
});

export const getSharedFolder = createAsyncThunk<any, number>(
  "link/getSharedFolder",
  async (folderId) => {
    const { data } = await axiosInstance.get(`folders/${folderId}`);
    return camelcaseKeys(data.data, { deep: true });
  },
);

export const putFolder = createAsyncThunk<any, { folderName: string; folderId: number }>(
  "folder/putFolder",
  async ({ folderName, folderId }) => {
    const { data } = await axiosInstance.put(`folders/${folderId}`, { name: folderName });
    return camelcaseKeys(data.data, { deep: true });
  },
);

export const deleteFolder = createAsyncThunk<any, number>(
  "folder/deleteFolder",
  async (folderId) => {
    const { data } = await axiosInstance.delete(`folders/${folderId}`);

    return data;
  },
);
