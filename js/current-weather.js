import weather from "../data/current-weather.js";
import { formatDate } from "./utils/format-data.js";

function setCurrentCity($el, city) {
  $el.textContent = city;
}

function setCurrentDate($el) {
  const date = new Date();
  const formattedDate = formatDate(date);
  $el.textContent = formattedDate;
}
function setCurrentTemp($el, temp) {
  $el.textContent = temp;
}
function configCurrentWeather(weather) {
  // loader
  // date
  const $currentWeatherDate = document.querySelector("#current-weather-date");
  setCurrentDate($currentWeatherDate);
  // city
  const $currentWeatherCity = document.querySelector("#current-weather-city");
  const city = weather.name;
  setCurrentCity($currentWeatherCity, city);
  //temp
  const $currentWeatherTemp = document.querySelector("#current-weather-temp");
  setCurrentTemp($currentWeatherTemp, "5");
  //background
}

export default function currentWeather() {
  // GEO // API - Weather  // Config
  configCurrentWeather(weather);
  console.log(weather);
}
