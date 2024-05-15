import { axiosInstance as axios } from "@/services/axiosInstace";
import { Link } from "@/services/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import camelcaseKeys from "camelcase-keys";
import { create } from "domain";

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

export const postLink = createAsyncThunk<
  any,
  { url: string; folderId: number; accessToken: string | null }
>("link/postLink", async ({ url, folderId, accessToken }) => {
  const { data } = await axios({
    method: "post",
    url: `links`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    data: {
      url: url,
      folderId: folderId,
    },
  });
  return camelcaseKeys(data.data, { deep: true });
});

export const deleteLink = createAsyncThunk<any, { linkId: number; accessToken: string | null }>(
  "link/deleteLink",
  async ({ linkId, accessToken }) => {
    const { data } = await axios({
      method: "delete",
      url: `links/${linkId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  },
);

export const putFavoriteLink = createAsyncThunk<
  any,
  { linkId: number; accessToken: string | null }
>("link/putFavorite", async ({ linkId, accessToken }) => {
  const { data } = await axios({
    method: "put",
    url: `https://bootcamp-api.codeit.kr/docs/linkbrary/v1/links/${linkId}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
});
