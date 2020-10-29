let temperature = parseFloat(document.getElementById('temp').value);
alert(temperature);
let windSpeed = parseFloat(document.getElementById('wSpeed').value);
let chill = windChill(temperature, windSpeed);

//output 
document.getElementById('calculatedWChill').innerHTML = chill;

function windChill(tempF, speed) {
  var chillFactor = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
  return chillFactor;
}

