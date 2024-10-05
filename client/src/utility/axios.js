import axios from "axios";

const serverPort = import.meta.env.VITE_SERVER_PORT || 5000

export const axiosInstance = axios.create({
  baseURL: `http://localhost:${serverPort}/api/v1`,
});
