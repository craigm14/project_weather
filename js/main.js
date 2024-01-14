/* openweathermap.org api key generated and url to openweather.org  */
/* custom key */
const apiKey = "da638781bf87ede35a9a383b9d6636ee";
/* Fetches info from url */
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

/* list of variables for location  input box, search button, location/temperature entered by user */
/* document.getElementById targets html element */
const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
/* const imageElement = document.getElementBYID("imamge");

/* on user click if location is present that is = locationInput (if) 
location is useable fetchWeather(location) function is called  */
searchButton.addEventListener("click", () => {
  const location = locationInput.value;
  if (location) {
    fetchWeather(location);
  }
});

/* I got to here and had to look up how to put the below together */

/* function fetchWeather */
function fetchWeather(location) {
  /* if location is good, url/location= const url  */
  /* I get lost around here...*/
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
  /* Fetch url */
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      locationElement.textContent = data.name;
      temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
    });
}
