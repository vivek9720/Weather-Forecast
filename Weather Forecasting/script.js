const button = document.getElementById("search-button");
const input = document.getElementById("search-input");

async function getData(cityName){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=72c14cea49c34174a2361748251601&q=${cityName}&aqi=yes`);
    return await promise.json();
}

button.addEventListener("click", async()=>{
    const value = input.value;
    try {
        const result = await getData(value);

        const city = document.getElementById("city");
        const temp = document.getElementById("temp");
        const windSpeed = document.getElementById("windSpeed");
        const humidity = document.getElementById("humidity");
        const condition = document.getElementById("condition");
        console.log(result);

        condition.innerText = "Condtion : "+ result.current.condition.text;
        city.innerText = `${result.location.name}, ${result.location.country}`;
        temp.innerText = "Temperature: " + result.current.temp_c + "°C";
        windSpeed.innerText = "Wind Speed: " + result.current.wind_kph + " kph";
        humidity.innerText = "Humidity: " + result.current.humidity + "%";
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Failed to fetch weather data. Please check the city name and try again.");
    }
});

//http://api.weatherapi.com/v1/current.json?key=72c14cea49c34174a2361748251601&q=London&aqi=yes