import React from "react";
import sunny from "../assets/Sunny.svg"
import rainy from "../assets/Rainy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"
import cloudy from "../assets/Cloudy.svg"

/*

function WeatherCard({city}) {

  weather = [
    {"Sunny": sunny},
    {"Rainy": rainy}, 
    {"Partly Cloudy" : partlyCloudy}, 
    {"Cloudy" :cloudy}]
  for (let i = 0; i < weather.length; i ++)
  { if(city.forecast == Object.keys(weather[i])){
    return (
    <div className = "card">
        <div className = "img-container">
            <img 
            className="card-img-top" 
            src = {weather[i][city.forecast]} 
            alt="Card image cap" 
            id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{city.city}</h3>
            <h5 className="card-text">{city.temperature}</h5>
            <h5 className="card-text">{city.forecast}</h5>
        </div>
    </div>    
  )}}
};
*/
function WeatherCard({ city }) {
  const weather = [
    { "Sunny": sunny },
    { "Rainy": rainy },
    { "Partly Cloudy": partlyCloudy },
    { "Cloudy": cloudy }
  ];

  return (
    <>
      {weather.map((condition, index) => {

        if (city.forecast === Object.keys(condition)[0]) {
          return (
            <div className="card" >
              <div className="img-container">
                <img
                  className="card-img-top"
                  src={condition[city.forecast]}
                  alt="Card image cap"
                  id="icon"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">{city.city}</h3>
                <h5 className="card-text">{city.temperature}</h5>
                <h5 className="card-text">{city.forecast}</h5>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </>
  );
}

// Export the WeatherCard
module.exports = WeatherCard