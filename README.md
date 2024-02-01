First commit of project_weather files

openweathermap.org api key generated and url to openweather.org
custom key

Fetches info from url

api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

tried to incorpate a 5 day weather alongside current weather, maybe a step too far

list of variables for location input box, search button, location/temperature entered by user
document.getElementById targets html element

const windSpeedElement = document.getElementById("wind");

forecast
const fiveDayForecast = document.getElementById("fiveDayForecast");

on user click if location is present that is = locationInput (if)
location is useable fetchWeather(location) function is called

function fetchWeather
if location is good, url/location = const url

Fetch sends a get requests to the url requesting the const url info, responce is then sent

back and converted into json, 2nd .then is a promise that has a responce holding the data that we need to
display the location and temp

catch displays error message if the fetch url is invalid location \*/

fiveDayForecast = console.log(data.forecast.forecastDay);

Planning to add in Hourly forecast for 4 days
