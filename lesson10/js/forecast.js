const apiURL = 'api.openweathermap.org/data/2.5/forecast/daily?id=5604473&units=imperial&appid=aa1bec371e7684027dab2f312e7c03ac';
/*the url is not working. Need to test it further*/
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

});