import axios from "axios";

const token = localStorage.getItem("authToken");

const axiosIntance = axios.create({
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

axiosIntance.interceptors.request.use((req) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

axiosIntance.interceptors.response.use(
  (response) => {
    //maybe process here
    return response;
  },
  (error) => {
    //do some global magic with error and pass back to caller
    return Promise.reject(error);
  }
);
export default axiosIntance;