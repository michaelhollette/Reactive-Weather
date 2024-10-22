import React from "react";
import sunny from "../assets/Sunny.svg";
import rainy from "../assets/Rainy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";
import cloudy from "../assets/Cloudy.svg";
function Location({cities, location, updateLocation}){
    let weather = [
        {"Sunny": sunny},
        {"Rainy": rainy}, 
        {"Partly Cloudy" : partlyCloudy}, 
        {"Cloudy" :cloudy}]
        
    for (let i = 0; i < cities.length; i++){
        if (cities[i].city == location){
            let weatherobj = weather.find(element => Object.keys(element) == cities[i].forecast)
            return renderLocation(cities[i], weatherobj[cities[i].forecast])
        }
    }
}

function renderLocation(city, weather){
    return(
        <div className= "centre">
        <div className="card-location" >
        <h3 className ="location-title">Your location's weather</h3>

      <div className="img-container">
        <img
          className="card-img-top"
          src={weather}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">The weather in {city.city} is</h3>
        <h5 className="card-text">{city.temperature}</h5>
        <h5 className="card-text">It is {city.forecast.toLowerCase()} today </h5>
      </div>
    </div>
    </div>
    )
}
module.exports = Location