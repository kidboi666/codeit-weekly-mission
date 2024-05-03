import axios from "axios";
import camelcaseKeys from "camelcase-keys";
import { FolderLink, FolderList, MockUserData, UserData } from "./types";

const CODEIT_URL = `https://bootcamp-api.codeit.kr/api`;

export const getUserRequest = async (): Promise<UserData> => {
  const response = await axios.get(`${CODEIT_URL}/users/1`);

  if (response.status < 200 || response.status >= 300) {
    throw new Error("유저 프로필 가져오기 실패");
  }

  return response.data;
};

export const getLinksRequest = async (id: number): Promise<FolderLink[]> => {
  const response = await axios.get(
    `${CODEIT_URL}/users/1/links?folderId=${id}`,
  );

  if (response.status < 200 || response.status >= 300) {
    throw new Error("링크 가져오기 실패");
  }

  return camelcaseKeys(response.data, { deep: true });
};

export const getFolderRequest = async (): Promise<FolderList[]> => {
  const response = await axios.get(`${CODEIT_URL}/users/1/folders`);

  if (response.status < 200 || response.status >= 300) {
    throw new Error("폴더 가져오기 실패");
  }

  return camelcaseKeys(response.data, { deep: true });
};

export const getAllLinksRequest = async (): Promise<FolderLink[]> => {
  const response = await axios.get(`${CODEIT_URL}/users/1/links`);

  if (response.status < 200 || response.status >= 300) {
    throw new Error("모든 링크 가져오기 실패");
  }

  return camelcaseKeys(response.data, { deep: true });
};

export const getMockUserRequest = async (): Promise<MockUserData> => {
  const response = await axios.get(`${CODEIT_URL}/sample/user`);

  if (response.status < 200 || response.status >= 300) {
    throw new Error("샘플 유저 프로필 가져오기 실패");
  }

  return response.data;
};

export const getMockFolderRequest = async (): Promise<FolderLink> => {
  const response = await axios.get(`${CODEIT_URL}/sample/folder`);

  if (response.status < 200 || response.status >= 300) {
    throw new Error("샘플 유저 폴더 가져오기 실패");
  }

  return response.data;
};
