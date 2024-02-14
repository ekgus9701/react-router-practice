import axios from "axios";

const BASE_URL = "/api";
const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error.response.status === 500) {
      console.error("500 error 발생");
    }
    return Promise.reject(error);
  }
);

export default instance;
