const fURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=1cc637f409022b0ae721d53d7a4fea4e';

fetch(fURL)
  .then((response) => response.json())
  .then((jsObject) => {
    
    /* Create a new array by filtering the indexes that include '18:00'  */
    const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00')); 
    
    /*console log for testing purposes
    console.log(forecast);*/ 

    /* Cycle through the 5 indexes of the array to populate the forecast info*/
    for (i = 0; i <= 4; i++){

      /* forecast temperature */
      document.getElementById('forecastTemp'+(i+1)).innerHTML = forecast[i].main.temp;
      
      /* forecast icon */
      const imagesrc = 'https://openweathermap.org/img/w/' + forecast[i].weather[0].icon + '.png';
      const desc = forecast[i].weather[0].description;
      document.getElementById('forecastImg'+(i+1)).setAttribute('src', imagesrc);  
      document.getElementById('forecastImg'+(i+1)).setAttribute('alt', desc);
    }
  


});