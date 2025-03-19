import axios from "axios";
import { getCookie } from "./cookie";
import { CLIENT_BASE_URL, SERVER_BASE_URL } from "../config/config";


const axiosInstance = axios.create({
  baseURL: CLIENT_BASE_URL,
  headers: {
    "Content-Type": "application/json" // Set your desired headers
  }
});

const axiosFormdataInstance = axios.create({
  baseURL: CLIENT_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data" // Set your desired headers
  }
});

const axiosInstanceServer = axios.create({
  baseURL: SERVER_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});


const api = {
  getServer: async (url = {}) => {
    try {
      console.log(`API GET request to: ${SERVER_BASE_URL}${url}`);

      const response = await axiosInstanceServer.get(`${SERVER_BASE_URL}${url}`);
      console.log("Success, API Response:", response);
      
      return response.data;

    } catch (error) {
      console.error("API Error:", error);

      if (error.response) {
        console.error("Response Data:", error.response.data);
        console.error("Response Status:", error.response.status);
        console.error("Response Headers:", error.response.headers);
        return { error: "No response from server" };

      } else {
        return { error: error.message || "Request failed" };
      }
    }
  },
  get: async (url, params = {}) => {
    try {
      console.log(`API GET request to: ${url}`, params);
      const response = await axiosInstance.get(url, { params });
      return response.data;

    } catch (error) {
      console.error("API Error:", error);
      if (error.response) {
        return { error: "No response from server" };

      } else {
        return { error: error.message || "Request failed" };
      }
    }
  },
  post: async (url, data = {}) => {
    try {
      const response = await axiosInstance.post(url, data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error.response.data;
    }
  },
  formPost: async (url, data) => {
    try {
      const token = getCookie("token");
      axiosFormdataInstance.defaults.headers.common["x-auth-token"] = token;
      const response = await axiosFormdataInstance.post(url, data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error.response.data;
    }
  },
  authPost: async (url, data) => {
    try {
      const token = getCookie("token");
      axiosInstance.defaults.headers.common["x-auth-token"] = token;
      const response = await axiosInstance.post(url, data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error.response.data;
    }
  },
  // Add functions for other HTTP methods (PUT, DELETE) as needed
};

export default api;
