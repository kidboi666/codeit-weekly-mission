import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/",
});

const refreshingToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    const res = await axiosInstance.post(`refresh-token`, { refreshToken });
    const { newToken } = res.data;
    localStorage.setItem("accessToken", newToken);
    return newToken;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newToken = await refreshingToken();
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return axiosInstance(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
