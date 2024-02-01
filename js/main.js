import { apiUrl, apiKey } from "./key.js";

const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const windElement = document.getElementById("wind");
const descriptionElement = document.getElementById("description");
const timezoneElement = document.getElementById("timezone");
const weatherIcon = document.querySelector(".icon img");
const humidityElement = document.getElementById("humidity");

searchButton.addEventListener("click", () => {
  const location = locationInput.value;
  if (location) {
    fetchWeather(location);
  }
});

function fetchWeather(location) {
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const date = convertTime(data.dt, data.timezone);
      console.log(data);
      locationElement.textContent = data.name;
      humidityElement.textContent = `${Math.round(data.main.humidity)}`;
      temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
      windElement.textContent = `${Math.round(data.wind.speed)}°kmh`;
      descriptionElement.textContent = data.weather[0].description;
      timezoneElement.textContent = date;
      const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      weatherIcon.setAttribute("src", iconURL);
    })

    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

function convertTime(seconds, timezone) {
  return new Date(seconds * 1000 + timezone * 1000);
}
