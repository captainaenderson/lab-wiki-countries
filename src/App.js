import "./App.css";
import { Route, Routes } from 'react-router-dom';
import countriesData from "./countries.json"
import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";


function App() {

  const [countries, setCountries] = useState(countriesData);

  return <div className="App">
    <Navbar/>
    <CountriesList countries = {countriesData}/>
  </div>;
}
export default App;