import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://localhost:2017/api",
  baseURL: "https://evangadi-forum-backend-1-gvn4.onrender.com/api",
});

export default axiosInstance;
