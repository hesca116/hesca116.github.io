const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const town = jsonObject['towns'];

    for (let i = 0; i < town.length; i++ ) {
      /*Pending: add a conditional statement to only select the 3 required towns*/
      if(town[i].name == 'Preston' || town[i].name == 'Soda Springs'|| town[i].name == 'Fish Haven'){
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let h3 = document.createElement('h3');
      let motto = document.createElement('p');
      let foundYear = document.createElement('p');
      let population = document.createElement('p');
      let annualRain = document.createElement('p');
      let image = document.createElement('img');

      h2.textContent = town[i].name;
      motto.textContent = town[i].motto;
      foundYear.textContent = 'Year Founded: ' + town[i].yearFounded;
      population.textContent = 'Population: ' + town[i].currentPopulation;
      annualRain.textContent = 'Average Rain Fall: ' + town[i].averageRainfall;

      image.setAttribute('src', town[i].photo);
      image.setAttribute('alt', h2.textContent + ' photo');
      /*image.setAttribute('height', '205');*/ /*Example of how to modify image attributes */

      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(motto);
      card.appendChild(foundYear);
      card.appendChild(population);
      card.appendChild(annualRain);
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
      }
  
    }

  });


