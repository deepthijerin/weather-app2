function showCity(response) {
   // console.log(response.data);
    document.querySelector("h3").innerHTML = response.data.name;
    document.querySelector("h1").innerHTML = Math.round(response.data.main.temp);
    variable=Math.round(response.data.main.temp);
    document.querySelector(
      "#goat"
    ).innerHTML = `Humidity:${response.data.main.humidity}%`;
    document.querySelector("#tiger").innerHTML = `Wind:${Math.round(
      response.data.wind.speed
    )}km/hr`;
    document.querySelector("#nature").innerHTML=response.data.weather[0].description;
    let iconElement=document.querySelector("#icon");
    iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
 
 
  }
  
  function changeFaren(event){
    event.preventDefault();
  let h1=document.querySelector("h1");
   
  h1.innerHTML=Math.round(((variable * 9/5) + 32));
  
}
function changeCelsius(event){
    event.preventDefault();
    let h1=document.querySelector("h1");
    h1.innerHTML=variable;

}



let search1=document.querySelector("a#workspace");
search1.addEventListener("click",changeFaren);

let serach2=document.querySelector("a#workarea");
serach2.addEventListener("click",changeCelsius);
  
let variable=null;
function searchCity(city) {
    let apiKey = "0942ec9e5ec8ffc97891eab6978cd978";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showCity);
  }
  
  let now = new Date();
  let heading = document.querySelector("#lamb");
  now.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[now.getDay()];
  hours=now.getHours();
  minutes=now.getMinutes();
  if(minutes<10){
       minutes=`0${minutes}`;
  }
  if (hours<10)
{
    hours=`0${hours}`;
}  
  heading.innerHTML = `${day}${hours}:${minutes}`;
  function func1(event) {
    event.preventDefault();
    let h2 = document.querySelector("h3");
    let searchInput = document.querySelector("#search-id");
    h2.innerHTML = searchInput.value;
    searchCity(searchInput.value);
  }
  let search = document.querySelector("form");
  
  search.addEventListener("submit", func1);

  