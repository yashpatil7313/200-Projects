async function getWeather() {
    let city = document.getElementById("city").value;

    let apiKey = "YOUR_API_KEY"; // replace this

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let response = await fetch(url);
    let data = await response.json();

    if (data.cod === 200) {
        document.getElementById("result").innerHTML =
            `<h2>${data.name}</h2>
             <p>🌡️ Temp: ${data.main.temp}°C</p>
             <p>☁️ ${data.weather[0].main}</p>`;
    } else {
        document.getElementById("result").innerHTML = "City not found ❌";
    }
}