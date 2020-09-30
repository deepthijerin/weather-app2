function showCity(response) {
    
    document.querySelector("h3").innerHTML = response.data.name;
    document.querySelector("h1").innerHTML = Math.round(response.data.main.temp);
    document.querySelector(
      "#goat"
    ).innerHTML = `Humidity:${response.data.main.humidity}%`;
    document.querySelector("#tiger").innerHTML = `Wind:${Math.round(
      response.data.wind.speed
    )}km/hr`;
    document.querySelector("#nature").innerHTML=response.data.weather[0].description;
  }
  
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
  
  function func2(event) {
    event.preventDefault();
    let h3 = document.querySelector("h1");
    h3.innerHTML = 60;
  }
  let search1 = document.querySelector("a#workspace");
  
  search1.addEventListener("click", func2);
  function func3(event) {
    event.preventDefault();
    let h4 = document.querySelector("h1");
    h4.innerHTML = 8;
  }
  let search2 = document.querySelector("a#workarea");
  search2.addEventListener("click", func3);
  