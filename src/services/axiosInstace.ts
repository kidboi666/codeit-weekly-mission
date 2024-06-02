import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/",
});

export const paperInstance = axios.create({
  baseURL: "https://codeit-weekly-mission.vercel.app/api/",
});

const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    const res = await axiosInstance.post(`refresh-token`, {
      refresh_token: refreshToken,
    });
    const { data } = res.data;
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

axiosInstance.interceptors.request.use(
  async (config) => {
    if (config.headers["include-access-token"]) {
      const accessToken = localStorage.getItem("accessToken");
      config.headers.Authorization = `Bearer ${accessToken}`;
      delete config.headers["include-access-token"];
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { accessToken } = await refreshAccessToken();
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return axiosInstance(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
