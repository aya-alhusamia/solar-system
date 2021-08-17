import axios from "axios";

const token = localStorage.getItem("myToken");
const instance = axios.create({
  baseURL: "http://localhost:8000",
});

export default instance;
