import React, { useState } from "react";
import { rapidAPI } from "../services/api";

export default function Hotels() {
  const [query, setQuery] = useState("Karachi");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchHotels = async () => {
    try {
      setLoading(true);
      const res = await rapidAPI.get("/api/v1/hotels/searchLocation", {
        params: { query }
      });
      setResults(res.data?.data || res.data || []);
    } catch (err) {
      console.error(err);
      alert("Error fetching hotels");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Hotel Search</h3>
      <input value={query} onChange={(e)=>setQuery(e.target.value)} />
      <button onClick={searchHotels}>Search</button>
      {loading ? <p>Loading...</p> : (
        <ul>
          {results.map((h, i) => (
            <li key={i}>
              <strong>{h.name || h.title}</strong><br/>
              {h.address || h.address_obj?.street}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
