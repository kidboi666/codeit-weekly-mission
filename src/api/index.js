const CODEIT_URL = `https://bootcamp-api.codeit.kr/api`;

export const getUserRequest = async () => {
  const response = await fetch(`${CODEIT_URL}/users/1`, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('유저 프로필 가져오기 실패');
  }

  return response.json();
};

export const postFolderRequest = async (formData) => {
  const response = await fetch(`${CODEIT_URL}/folders`, {
    method: 'POST',
    header: 'Content-Type: application/json',
    body: formData,
  });
  if (!response.ok) {
    throw new Error('유저 폴더 만들기 실패');
  }

  return response.json();
};

export const getLinksRequest = async (id) => {
  const response = await fetch(`${CODEIT_URL}/users/1/links?folderId=${id}`);
  if (!response.ok) {
    throw new Error('링크 가져오기 실패');
  }

  return response.json();
};

export const getFolderRequest = async () => {
  const response = await fetch(`${CODEIT_URL}/users/1/folders`);
  if (!response.ok) {
    throw new Error('폴더 가져오기 실패');
  }

  return response.json();
};

export const getAllLinksRequest = async () => {
  const response = await fetch(`${CODEIT_URL}/users/1/links`);
  if (!response.ok) {
    throw new Error('모든 링크 가져오기 실패');
  }

  return response.json();
};

export const getMockUserRequest = async () => {
  const response = await fetch(`${CODEIT_URL}/sample/user`, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('샘플 유저 프로필 가져오기 실패');
  }

  return response.json();
};

export const getMockFolderRequest = async () => {
  const response = await fetch(`${CODEIT_URL}/sample/folder`);
  if (!response.ok) {
    throw new Error('샘플 유저 폴더 가져오기 실패');
  }
  return response.json();
};
