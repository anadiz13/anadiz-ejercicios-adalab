import React, { useState } from "react";
import "../stylesheets/App.scss";
import CitySelector from "./CitySelector";

function App() {
  const [city, setCity] = useState("");
  const handleCity = (cityValue) => {
    console.log(cityValue);
    setCity(cityValue);
  };

  return (
    <>
      <CitySelector handleCity={handleCity} />
      <p>La ciduad es {city}</p>
    </>
  );
}

export default App;
