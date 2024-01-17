/* openweathermap.org api key generated and url to openweather.org  */
/* custom key */
const apiKey = "da638781bf87ede35a9a383b9d6636ee";
/* Fetches info from url */
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

/* api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key} */

/* tried to incorpate a 5 day weather alongside current weather, maybe a step too far */

/* list of variables for location  input box, search button, location/temperature entered by user */
/* document.getElementById targets html element */
const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
/*const windSpeedElement = document.getElementById("wind");8

/* forecast */
/* const fiveDayForecast = document.getElementById("fiveDayForecast");*/

/* on user click if location is present that is = locationInput (if) 
location is useable fetchWeather(location) function is called  */
searchButton.addEventListener("click", () => {
  const location = locationInput.value;
  if (location) {
    fetchWeather(location);
  }
});

/* function fetchWeather */
function fetchWeather(location) {
  /* if location is good, url/location = const url  */
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
  /* Fetch sends a get requests to the url requesting the const url info, responce is then sent 
  back and converted into json, 2nd .then is a promise that has a responce holding the data that we need to 
  display the location and temp */
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      locationElement.textContent = data.name;
      temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
      /*fiveDayForecast = console.log(data.forecast.forecastDay);*/
    })

    /* .catch displays error message if the fetch url is invalid location */
    .catch((error) => "Location not valid");
}
