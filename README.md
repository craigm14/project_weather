First commit of project_weather files

/_ openweathermap.org api key generated and url to openweather.org _/
/_ custom key _/

/_ Fetches info from url _/

/_ api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key} _/

/_ tried to incorpate a 5 day weather alongside current weather, maybe a step too far _/

/_ list of variables for location input box, search button, location/temperature entered by user _/
/_ document.getElementById targets html element _/

/\*const windSpeedElement = document.getElementById("wind");

/_ forecast _/
/_ const fiveDayForecast = document.getElementById("fiveDayForecast");_/

/_ on user click if location is present that is = locationInput (if)
location is useable fetchWeather(location) function is called _/

/_ function fetchWeather _/
/_ if location is good, url/location = const url _/

    /* Fetch sends a get requests to the url requesting the const url info, responce is then sent

back and converted into json, 2nd .then is a promise that has a responce holding the data that we need to
display the location and temp \*/

      /* .catch displays error message if the fetch url is invalid location */

       /*fiveDayForecast = console.log(data.forecast.forecastDay);*/
