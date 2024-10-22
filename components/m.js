
let weather = [
    {"Sunny": 1},
    {"Rainy": 2}, 
    {"Partly Cloudy" : 3}, 
    {"Cloudy" :4}];

weatherobj = weather.find(element => Object.keys(element) == "Rainy")

console.log(weatherobj[Object.keys(weatherobj)])