const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const town = jsonObject['towns'];
    /* town[x] is used to select the relevant town*/
    for (let i = 0; i < town[6].events.length; i++ ) {
      /*Pending: add a conditional statement to only select the 3 required towns*/
      let eventCard = document.createElement('section');
      let event = document.createElement('p');
      
      event.textContent = town[6].events[i];    
      
      eventCard.appendChild(event);
      
      document.querySelector('div.eventCards').appendChild(eventCard);
       
    }

  });


