var showTime = document.getElementById("showTime");

function formatAMPM() {
  let date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  var strTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
  showTime.textContent = strTime;
}

setInterval(formatAMPM, 1000);

var myDate = new Date();
var hrs = myDate.getHours();

var greet;
let name;
if (localStorage.getItem("name")) {
  name = localStorage.getItem("name");
} else {
  name = prompt("What is your name?");
  localStorage.setItem("name", name);
}

name = name ? name : "";
if (hrs < 12) greet = "Good Morning";
else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

document.getElementById("lblGreetings").innerHTML = "<b>" + greet + " " + name;
