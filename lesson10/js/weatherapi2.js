const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=aa1bec371e7684027dab2f312e7c03ac';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let temperature = jsObject.main.temp;
    let windSpeed = parseFloat(jsObject.wind.speed);
    let chill = windChill(temperature, windSpeed);

    document.getElementById('currentTemp').textContent = temperature;
    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wSpeed').textContent = windSpeed;
    document.getElementById('calculatedWChill').innerHTML = chill;

  });

function windChill(tempF, speed) {
  
  var result = "N/A";
  
  if (tempF <= 50 && speed > 3){ /*Windchill calculated only when it meets these criteria*/
    var chillFactor = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
    result = Math.round(chillFactor*10)/10 + " °F";
  }
  
  return result;
}
