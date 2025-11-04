import axios, { type AxiosInstance, type AxiosRequestHeaders } from "axios";
import Cookies from "js-cookie";
import { CookieKeys } from "../../helpers/cookies";

export const apiUrl = "https://ttt.aboutdream.io";

const getToken = (): string | undefined => {
  return Cookies.get(CookieKeys.TOKEN);
};

export const client: AxiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    } as AxiosRequestHeaders;
  }
  return config;
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/auth/login";
    }
    return Promise.reject(error);
  },
);

export const publicClient: AxiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  } as AxiosRequestHeaders,
});
