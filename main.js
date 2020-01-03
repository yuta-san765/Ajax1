'use strict';
{
  const url = new URL("https://api.openweathermap.org/data/2.5/weather");
  let params = {
    appid: "4b5774e9f3d2a07b84f0f2f88e486224",
    q: "London",
  };
  const qs = new URLSearchParams(params);

  fetch(`${url}?${qs}`, {method: "GET",})
    .then(response => response.json())
    .then(json => {
      const weather = json.weather[0].description;
      console.log(weather);

      const londonWeather = document.body.querySelector('h1');
      londonWeather.textContent = weather;
    });


}