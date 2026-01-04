// src/services/api.js
import axios from "axios";

const openWeather = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

const rapidAPI = axios.create({
  baseURL: "https://tripadvisor16.p.rapidapi.com", // example host
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
  },
});

export { openWeather, rapidAPI, axios };