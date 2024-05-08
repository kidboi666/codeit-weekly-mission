import { axiosInstance as axios } from "./axiosInstace";
import camelcaseKeys from "camelcase-keys";
import { Link, FolderList, MockUserData, UserData } from "./types";

const returnCase = (response: any, message: string) => {
  if (response.status < 200 || response.status >= 300) {
    throw new Error(`${message} 실패`);
  }

  return camelcaseKeys(response.data, { deep: true });
};

export const getUserRequest = async (): Promise<UserData> => {
  const response = await axios.get(`users/1`);

  return returnCase(response, "유저 프로필 가져오기");
};

export const getLinksRequest = async (id: number): Promise<Link[]> => {
  const response = await axios.get(`users/1/links?folderId=${id}`);

  return returnCase(response, "링크 가져오기");
};

export const getFolderRequest = async (): Promise<FolderList[]> => {
  const response = await axios.get(`users/1/folders`);

  return returnCase(response, "폴더 가져오기");
};

export const getAllLinksRequest = async (): Promise<Link[]> => {
  const response = await axios.get(`users/1/links`);

  return returnCase(response, "모든 링크 가져오기");
};

export const getMockUserRequest = async (): Promise<MockUserData> => {
  const response = await axios.get(`sample/user`);

  return returnCase(response, "샘플 유저 프로필 가져오기");
};

export const getMockFolderRequest = async (): Promise<Link> => {
  const response = await axios.get(`sample/folder`);

  return returnCase(response, "샘플 유저 폴더 가져오기");
};
