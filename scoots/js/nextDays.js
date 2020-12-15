  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";
  
  var today = d.getDay();
  var counter = 1;

  for (i = 1; i < 4; i++){
    if (today+counter > 6){
      counter=0;
      today=0;
    } 
    document.getElementById('day'+i).innerHTML = weekday[today+counter];
    counter++;
      
  }
