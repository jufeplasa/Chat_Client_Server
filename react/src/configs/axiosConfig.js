import axios from "axios";

export const baseURL = "http://localhost:3000";
const axiosI = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export { axiosI };
