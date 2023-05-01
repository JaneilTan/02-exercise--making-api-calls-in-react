import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";

const App = () => {
  const [properties, setProperties] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5001/properties")
    const data = await response.json();
    setProperties(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  

  return (
    <>
      <Header />
      <div className="container">
        <h1>Properties for sale</h1>
        {properties.map((property) => {
          return (
            <li>
              <img src={property.img} alt={property.address} />
              <h2>{property.title}</h2>
              <p>{property.address}</p>
              <p>{property.askingPrice}</p>
              <p>{property.description}</p>
            </li>
          )
        })}
      </div>
    </>
  );
};

export default App;
