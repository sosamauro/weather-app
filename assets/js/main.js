let weather = {
  apiKey: "03a338b8cc251312bfc74bf955c2a077",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.diplayWeather(data));
  },
  diplayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = name;
    switch (icon) {
      case "01d":
        document.querySelector(
          ".icon"
        ).innerHTML = `<i class="fas fa-sun"></i>`;
        break;
      case "01n":
        document.querySelector(
          ".icon"
        ).innerHTML = `<i class="fas fa-moon"></i>`;
        break;
      case "02d":
        document.querySelector(
          ".icon"
        ).innerHTML = `<i class="fas fa-cloud-sun"></i>`;
        break;
      case "02n":
        document.querySelector(
          ".icon"
        ).innerHTML = `<i class="fas fa-cloud-moon"></i>`;
        break;
      case "03d":
        document.querySelector(
          ".icon"
        ).innerHTML = `<i class="fas fa-cloud"></i>`;
        break;
      case "03n":
        document.querySelector(
          ".icon"
        ).innerHTML = `<i class="fas fa-cloud"></i>`;
        break;
      case "04d":
        document.querySelector(
          ".icon"
        ).innerHTML = `<i class="fas fa-cloud"></i>`;
        break;
      case "04n":
        document.querySelector(
          ".icon"
        ).innerHTML = `<i class="fas fa-cloud"></i>`;
        break;
      case "09d":
        document.querySelector(
          ".icon"
        ).innerHTML = `<i class="fas fa-cloud-showers"></i>`;
        break;
      case "09n":
        document.querySelector(
          ".icon"
        ).innerHTML = `<i class="fas fa-cloud-showers"></i>`;
        break;
      case "010d":
        document.querySelector(
          ".icon"
        ).innerHTML = `<i class="fas fa-cloud-rain"></i>`;
        break;
      case "010n":
        document.querySelector(
          ".icon"
        ).innerHTML = `<i class="fas fa-cloud-rain"></i>`;
        break;
      case "011d":
        document.querySelector(
          ".icon"
        ).innerHTML = `<i class="fas fa-cloud-bolt"></i>`;
        break;
      case "011n":
        document.querySelector(
          ".icon"
        ).innerHTML = `<i class="fas fa-cloud-bolt"></i>`;
        break;
      case "013d":
        document.querySelector(
          ".icon"
        ).innerHTML = `<i class="fas fa-snowflake"></i>`;
        break;
      case "013n":
        document.querySelector(
          ".icon"
        ).innerHTML = `<i class="fas fa-snowflake"></i>`;
        break;
      case "050d":
        document.querySelector(
          ".icon"
        ).innerHTML = `<i class="fas fa-cloud-fog"></i>`;
        break;
      case "050n":
        document.querySelector(
          ".icon"
        ).innerHTML = `<i class="fas fa-cloud-fog"></i>`;
        break;
      default:
        break;
    }
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = Math.round(temp) + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    weather.search();
  }
});

weather.fetchWeather("Buenos Aires");
