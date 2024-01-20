

async function check(url, options) {
  try {
    const response = await fetch(url, options);
    const result = await response.json(); // Use .json() to parse JSON response

    // Update HTML element with the result
    const cityName = document.getElementById("cityName");
    cityName.innerHTML = `${result.location.name}`;

    const humidity = document.getElementById("humidity");
    const humidityElement = document.createElement("p");
    humidityElement.innerHTML = `${result.current.humidity} %`;
    humidity.append(humidityElement);

    const wind = document.getElementById("wind");
    const windElement = document.createElement("p");
    windElement.innerHTML = `${result.current.wind_kph} km/h`;
    wind.append(windElement);

   

    const tempElement = document.getElementById("tempature");
    tempElement.innerHTML = `${result.current.temp_c} °C`;

    const imageElement = document.createElement("img");
    imageElement.src = result.current.condition.icon;
    const container = document.getElementById("wether-img");
    container.appendChild(imageElement);

    console.log(result);
  } catch (error) {
    console.error(error);
  }
};


