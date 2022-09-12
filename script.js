// "use strict";

// let myLocation = navigator.geolocation.getCurrentPosition(displayLocation);
// function displayLocation(position) {
//     let myLat = position.coords.latitude;
// let myLong = position.coords.longitude;
// console.log(myLat, myLong)
// }

let apiKey = "ab9f1a7320b8bc7c69bc10187a26adf7";
let baseURL = "https://api.openweathermap.org/data/2.5/weather";

const getUserLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayCurrentWeather);
    

  } else {
    alert("Geolocation is not supported by this browser.");
  }
};

let displayCurrentWeather = function (position) {
  fetch(
    `${baseURL}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => {
        // let paragraph = document.getElementById("para");
        let myLocation = document.getElementById("location");
        let myIcon = document.getElementById("icon");
        let myDegree = document.getElementById("degree");
        let myCondition = document.getElementById("condition");

        // paragraph.innerText = JSON.stringify(data);
        myLocation.textContent = data.name;
        myIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
        myDegree.textContent = Math.floor((data.main.temp - 273 ))+' C';
        myCondition.textContent = data.weather[0].main;
      })
}

getUserLocation()


