import axios from "axios";

const api = axios.create({
  baseURL: "https://mks-challenge-api-frontend.herouapp.com/api",
});

export default api;
