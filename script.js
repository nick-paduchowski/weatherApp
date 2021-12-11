const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=4f774700c5cf6788a4ec2149c7c5ab87';
const weather = {
    "apiKey": '4f774700c5cf6788a4ec2149c7c5ab87',
    fetchWeather: function(city){
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const city = data.name;
        const temp = Math.floor(data.main.temp);
        const description = data.weather[0].main;
        const icon = data.weather[0].icon;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;
        console.log(city,icon,temp,description,humidity,wind);
        document.querySelector('.city').innerHTML = "Weather in " + city;
        document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector('.temp').innerHTML = temp + "°C";
        document.querySelector('.description').innerHTML = description;
        document.querySelector('.humidity').innerHTML = "Humidity: " + humidity + "%";
        document.querySelector('.wind').innerHTML = "Wind Speed: " + wind + " km/h";
    },
    search: function(){
        this.fetchWeather(document.querySelector('.search-bar').value);
    }
}

document.querySelector('.search button').addEventListener("click", () => {
        weather.search();
    });
