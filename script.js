const apiKey = "0e620cb5fb15649d7d7b32f2b509ee0c"; // API Key -> OpenWeatherMap
async function getWeather(params) {
    const city = document.getElementById("city").value
    const weatherCard = document.getElementById("weathercard");
    if ( city === "" ){
        weatherCard.innerHTML = `<p>Please enter a city name ❗</p>`;
        return;
    }
    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        if(!response.ok) throw new Error("City not found");
        const data = await response.json();

        weatherCard.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡 Temp: ${data.main.temp} °C</p>
        <p>☁️ Weather: ${data.weather[0].description}</p>
        <p>💨 Wind: ${data.wind.speed} m/s</p>
        `
    } catch(error){
        weatherCard.innerHTML = `<p>❌ ${error.message}</p>`;
    }
}