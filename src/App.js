import "./App.css";
import "./miCss.css";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((response) => response.json())
      .then((countries) => {
        countries
          .filter((country) => country.name.common.split(" ").length === 1)
          .map((country, i) => {
            setCountries((e) => [...e, makeACountry(country, i)]);
          });
      });
  }, []);

  const makeACountry = (country, i) => {
    return (
      <div key={i} className="card">
        <div className="name">{country.name.common}</div>
        <div>
          <img className="flag" src={country.flags.svg} alt="" />
        </div>
      </div>
    );
  };

  return <div className="main-container">{countries}</div>;
}

export default App;
