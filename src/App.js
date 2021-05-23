import "./App.css";
import React, { useState } from "react";
import { API } from "./api";

const { fetchDriver, fetchRecentTripsForRider } = API;

const App = () => {
  const [inputValue, setInputValue] = useState("TEST");
  const [drivers, setDrivers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const driverInfo = [];
    const recentTrips = await fetchRecentTripsForRider(inputValue);
    await recentTrips.forEach(async (driver) => {
      driverInfo.push(await fetchDriver(driver.driverUUID));
    });

    setDrivers(driverInfo);
  };

  return (
    <div className="App">
      <br />
      <form id="form" onSubmit={handleSubmit}>
        <label>
          Rider UUID:
          <input
            type="text"
            id="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <input type="submit" value="Fetch driver emails" />
        <div id="results">
          {drivers.map((driver, i) => {
            return <li key={i}>{driver.email}</li>;
          })}
        </div>
      </form>
    </div>
  );
};

export default App;
