const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=20.475760&lon=-86.971431&exclude=hourly,minutely&units=imperial&appid=aa1bec371e7684027dab2f312e7c03ac';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    /* Current weather summary */
    document.getElementById('currently').textContent = jsObject.current.weather[0].main;
    document.getElementById('currentTemp').textContent = jsObject.current.temp;
    document.getElementById('humidity').textContent = jsObject.current.humidity;
    document.getElementById('wSpeed').textContent = jsObject.current.wind_speed;

    /* Forecast */
    for (i = 0; i <= 2; i++) {
      /* forecast temperature */
      document.getElementById('forecastTemp' + (i + 1)).innerHTML = jsObject.daily[i].temp.day;

      /* forecast icon */
      const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.daily[i].weather[0].icon + '.png';
      const desc = jsObject.daily[i].weather[0].description;
      document.getElementById('forecastImg' + (i + 1)).setAttribute('src', imagesrc);
      document.getElementById('forecastImg' + (i + 1)).setAttribute('alt', desc);
    }

    /* Alerts */
    if (jsObject.alert == null) { /* If there is no alert, do nothing */
      
      /* START OF >>>> ENABLE THIS CODE TO SEE THE ALERT 
      document.getElementById("alertChecker").classList.toggle("hide");
      jsonTest();
       END OF >>>> DISABLE THIS CODE AFTER EVALUATING THE ALERT*/

    } else { /* If there is an alert, toggle the Alert element and pull data from jsObject */
      toggleAlert();
      document.getElementById('wAlertHeadline').textContent = jsObject.headline 
      document.getElementById('wAlertDesc').innerText = jsObject.description 
      document.getElementById('wAlertInstr').innerText = jsObject.instruction;
    }

    /* PROFESSOR OR ASSISTANT PLEASE READ 
    
    Regarding alerts: The position of 'headline', 'description', and 'instruction' within the jsObject.
    These values are NOT located within jsObject.alert in the example provided by https://openweathermap.org/api/push-weather-alerts, and I think this might be a mistake. I think they should be inside jsObject.alert 

    The values are located OUTSIDE of .alert 

    Therefore, lines 34 to 36 assign the values directly from jsObject. 
    
    */

  });

/*Function to enable or disable the alert depending on an incoming alert through the API or user interaction through the X button */

function toggleAlert() {
  document.getElementById("alertChecker").classList.toggle("hide");
}


/* Function to test the alerts using alertTest.json */

function jsonTest() {
  fetch("./data/alertTest.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const alertTest = jsonObject;
      document.getElementById('wAlertHeadline').innerText = alertTest.headline;
      document.getElementById('wAlertDesc').innerText = alertTest.description;
      document.getElementById('wAlertInstr').innerText = alertTest.instruction;

    });

}