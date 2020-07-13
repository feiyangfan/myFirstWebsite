var month = new Array()
month[0] = "January"; month[1] = "February"; month[2] = "March"; month[3] = "April";
month[4] = "May"; month[5] = "June"; month[6] = "July"; month[7] = "August";
month[8] = "September"; month[9] = "October"; month[10] = "November"; month[11] = "December";

function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    var monthNow = date.getMonth();
    var day = date.getDate();
    day = updateTime(day);
    document.getElementById("date").innerText = "Today is: " + month[monthNow] + " " + day + ".";
    document.getElementById("home-clock").innerText = "Time: " + hour + " : " + min + " : " + sec + "."; /* adding time to the div */
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime(); /* calling currentTime() function to initiate the process */



// function changeActive() {
//     // Get the container element
//     var btnContainer = document.getElementById("sidenav-link");

//     // Get all buttons with class="btn" inside the container
//     var btns = btnContainer.getElementsByClassName("sidenav-link");

//     // Loop through the buttons and add the active class to the current/clicked button
//     for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function() {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
//     }
// }



