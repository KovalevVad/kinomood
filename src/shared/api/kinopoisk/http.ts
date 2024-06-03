import axios from "axios";

const http = axios.create({
  method:"GET",
  headers: {
    accept: "application/json",
    "X-API-KEY": import.meta.env.VITE_API_KEY,
  },
  baseURL: "https://api.kinopoisk.dev/v1.4/",
});


export default http