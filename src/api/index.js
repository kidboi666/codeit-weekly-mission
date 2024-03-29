const CODEIT_URL = `https://bootcamp-api.codeit.kr/api`;

export const getMockUser = async () => {
  const response = await fetch(`${CODEIT_URL}/sample/user`, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('샘플 유저 프로필 가져오기 실패');
  }

  return response.json();
};

export const getMockFolder = async () => {
  const response = await fetch(`${CODEIT_URL}/sample/folder`);
  if (!response.ok) {
    throw new Error('샘플 유저 폴더 가져오기 실패');
  }
  return response.json();
};

export const createFolder = async (value) => {
  const response = await fetch(`${CODEIT_URL}/sample/folder`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: value,
  });
  if (!response.ok) {
    throw new Error('폴더 생성 실패');
  }
  return response.json();
};
