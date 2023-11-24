import axios from "axios";

export const axiosSecure = () => {
  return axios.create({
    baseURL: "http://localhost:5000/api/v1",
  });
};
