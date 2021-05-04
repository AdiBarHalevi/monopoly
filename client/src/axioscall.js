import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? `https://adi-bootcamp-finalproject.herokuapp.com/`
      : `http://localhost:8000/`,
});

export default axiosInstance;
