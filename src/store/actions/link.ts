import axiosInstance from "@/src/services/axiosInstace";
import { Link } from "@/src/services/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import camelcaseKeys from "camelcase-keys";

export const getLinkList = createAsyncThunk<
  Link[],
  { userId: number; folderId: number }
>("link/getLinkList", async ({ userId, folderId }) => {
  const { data } = await axiosInstance.get(
    `users/${userId}/links?folderId=${folderId}`,
  );
  return camelcaseKeys(data.data, { deep: true });
});

export const getAllLinkList = createAsyncThunk<Link[], number>(
  "link/getLink",
  async (userId) => {
    const { data } = await axiosInstance.get(`users/${userId}/links`);
    return camelcaseKeys(data.data, { deep: true });
  },
);

export const postLink = createAsyncThunk<
  any,
  { url: string; folderId: number }
>("link/postLink", async ({ url, folderId }) => {
  const { data } = await axiosInstance({
    method: "post",
    url: `links`,
    data: {
      url: url,
      folderId: folderId,
    },
  });
  return camelcaseKeys(data.data, { deep: true });
});

export const deleteLink = createAsyncThunk<any, number>(
  "link/deleteLink",
  async (linkId) => {
    const { data } = await axiosInstance.delete(`links/${linkId}`);
    return data;
  },
);

export const putFavoriteLink = createAsyncThunk<any, number>(
  "link/putFavorite",
  async (linkId) => {
    const { data } = await axiosInstance({
      method: "put",
      url: `https://bootcamp-api.codeit.kr/docs/linkbrary/v1/links/${linkId}`,
    });

    return data;
  },
);
