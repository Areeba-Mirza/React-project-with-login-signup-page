// Weather.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Karachi ke latitude & longitude
    const lat = 24.86;
    const lon = 67.01;

    axios
      .get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
      .then((res) => {
        setWeather(res.data.current_weather);
        setLoading(false);
      })
      .catch((err) => {
        setError("Weather data fetch failed!");
        setLoading(false);
        console.error(err);
      });
  }, []);

  if (loading) return <p>Loading weather...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Karachi Weather</h2>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Wind Speed: {weather.windspeed} km/h</p>
      <p>Weather Code: {weather.weathercode}</p>
    </div>
  );
};

export default Weather;
