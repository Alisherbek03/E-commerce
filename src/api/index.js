import axios from "axios";

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
  headers: {
    "Content-Type": "appilication/json",
    // Authorization: "headers",
    // headers: {
    //   Authorization: apiKey,
    // },
  },
  timeout: 2000,
});

export { apiInstance };
