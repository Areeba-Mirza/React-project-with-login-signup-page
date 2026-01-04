import React, { useState } from "react";
import axios from "axios";

export default function Cars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCars = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://car-rental-api.p.rapidapi.com/cars", {
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
          "X-RapidAPI-Host": "car-rental-api.p.rapidapi.com"
        },
        params: { location: "Karachi" }
      });
      setCars(res.data);
    } catch (err) {
      console.error(err);
      alert("Error fetching cars");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Available Cars</h3>
      <button onClick={fetchCars}>Load cars</button>
      {loading ? <p>Loading...</p> : (
        <ul>
          {cars.map((c, i) => (<li key={i}>{c.make} {c.model} - {c.price}</li>))}
        </ul>
      )}
    </div>
  );
}
