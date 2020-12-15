/*
fetch("data/rentals.json")
.then(response => {
   return response.json();
})
.then(data => console.log(data));
*/

fetch("../data/rentals.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const rentals = jsonObject['rentals'];

    for (let i = 0; i < rentals.length; i++) {
      /* Fill table tg1 (mid and large viewports) */
      document.getElementById('type' + i).textContent = rentals[i].type;
      document.getElementById('make' + i).textContent = rentals[i].model;
      document.getElementById('persons' + i).textContent = rentals[i].maxPersons;
      document.getElementById('reserveHalf' + i).textContent = '$' + rentals[i].reservation[0];
      document.getElementById('reserveFull' + i).textContent = '$' + rentals[i].reservation[1];
      document.getElementById('walkHalf' + i).textContent = '$' + rentals[i].walkIn[0];
      document.getElementById('walkFull' + i).textContent = '$' + rentals[i].walkIn[1];

      /* Fill table tg2 (small viewports) */
      document.getElementById('desc' + i).innerText = rentals[i].type + '\n' + rentals[i].model + '\n' + rentals[i].maxPersons + ' seat(s)';
      document.getElementById('reserve' + i).textContent = '$' + rentals[i].reservation[0] + ' | $' + rentals[i].reservation[1];
      document.getElementById('walk' + i).textContent = '$' + rentals[i].reservation[1] + ' | $' + rentals[i].reservation[1];      

    }

  });