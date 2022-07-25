import weather from '../data/current-weather.js';
import {formatDate, formatTemp} from './utils/formatData.js';
import {weatherConditionCodes} from './constants.js';
import {getCurrentPosition} from './geolocation.js';

const setCurrentCity = (elementDOM, city) => {
	elementDOM.textContent = city;
};

const setCurrentDate = (elementDOM) => {
	const date = new Date();
	const formatttedDate = formatDate(date);
	elementDOM.textContent = formatttedDate;
};

const setCurrentTemp = (elementDOM, temp) => {
	elementDOM.textContent = formatTemp(temp);
};

const solarStatus = (sunsetTime, sunriseTime) => {
	const currentHours = new Date().getHours();
	const sunsetHours = sunsetTime.getHours();
	const sunriseHours = sunriseTime.getHours();
	
	if (currentHours > sunsetHours || currentHours < sunriseHours) {
		return 'night';
	}
	return 'morning';
};

const setBackground = (elementDOM, conditionCode, solarStatus) => {
	const weatherType = weatherConditionCodes[conditionCode];
	const size = window.matchMedia('(-webkit-min-device-pixel-ratio: 2)').matches ? '@2x' : '';
	
	elementDOM.style.backgroundImage = `url(./images/${solarStatus}-${weatherType}${size}.jpg)`;
};

function configCurrentWeather(weather) {
	// loader
	
	// date
	const CurrentWeatherDate = document.querySelector('#current-weather-date');
	setCurrentDate(CurrentWeatherDate);
	
	const CurrentWeatherCity = document.querySelector('#current-weather-city');
	const city = weather.name;
	setCurrentCity(CurrentWeatherCity, city);
	
	const CurrentWeatherTemp = document.querySelector('#current-weather-temp');
	const temp = weather.main.temp;
	setCurrentTemp(CurrentWeatherTemp, temp);
	// temp
	
	// background
	const sunriseTime = new Date(weather.sys.sunrise * 1000);
	const sunsetTime = new Date(weather.sys.sunset * 1000);
	const App = document.querySelector('#app');
	const conditionCode = String(weather.weather[0].id).charAt(0);
	setBackground(App, conditionCode, solarStatus(sunsetTime, sunriseTime));
}

export default function currentWeather() {
	// GEO
	// API Weather
	// Config
	getCurrentPosition();
	configCurrentWeather(weather);
	console.log(weather);
}


