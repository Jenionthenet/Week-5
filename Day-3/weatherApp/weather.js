const cityTextBx = document.getElementById("cityBox")
const displayDiv = document.getElementById("weatherInfo")
const searchBtn = document.getElementById("citySearchBtn")

const appKey = "2300a680dceb8850f9903f3b53ed37a4"


function getWeather(weatherInfoDownloaded) {
    
    const cityName = cityTextBx.value 
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appKey}&units=imperial`


    
    fetch(weatherURL)
    .then(function(response) {
        return response.json()
    }).then(function(result) {
        weatherInfoDownloaded(result)
    }).catch(function(error) {
        console.log(error)
    })

    cityTextBx.value = ""
}


searchBtn.addEventListener("click", function() {
    getWeather(function(weatherInfo) {
        
        displayWeather(weatherInfo)
    })
})


function displayWeather(weatherInformation) {
    
    let weatherData = `
    
    <h2 id="cityName">${weatherInformation.name} Weather<h2>
    <div id="iconAndTemp"><div id="main"><img id="icon" src="http://openweathermap.org/img/w/${weatherInformation.weather[0].icon}.png" alt=""></div>
    <div id="currentTempFeel"><span id="currentTemp"> ${weatherInformation.main.temp}\xBA F </span>
    <h3> Feels Like: <span class="answers"> ${weatherInformation.main.feels_like}\xBA F </span></h3></div></div>
    <h3>Miminum Tempurature: <span class="answers">${weatherInformation.main.temp_min}\xBA F </span></h3>
    <h3>Maximum Tempurature: <span class="answers">${weatherInformation.main.temp_max}\xBA F </span></h3>
    <h3>Humidity: <span class="answers">${weatherInformation.main.humidity}</span></h3>
    <h3>Wind Speed: <span class="answers">${weatherInformation.wind.speed} mi/hr</span></h3>
    
    `    
    
    displayDiv.innerHTML = weatherData
}


