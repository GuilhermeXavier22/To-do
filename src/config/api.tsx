import axios from "axios";

const API_BASE_URL: string =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3004";

const service = axios.create({
  baseURL: API_BASE_URL,
});

export default service;
