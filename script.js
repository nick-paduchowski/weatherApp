// Base Url Used as a Template for the Fetch
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=***************************';

// Weather Object to Hold Functions for Updating the Page

const weather = {
    "apiKey": '***************************', //API Key
    fetchWeather: function(city){ //Function that calls the API with a specified city
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + this.apiKey) //configure API request 
        .then((response) => response.json()) // Get Response in JSON format
        .then((data) => this.displayWeather(data)); // Pass the JSON data to the displayWeather Function
    },
    displayWeather: function(data){ // Function for displaying/changing the weather data on the site
        const city = data.name; // Save the city from  the JSON object
        const temp = Math.floor(data.main.temp); // Save the rounded down temperature from the JSON object
        const description = data.weather[0].main; // Save the description from the JSON object
        const icon = data.weather[0].icon; // Save the icon from the JSON object
        const humidity = data.main.humidity; // Save the humidity from the JSON object
        const wind = data.wind.speed; // Save the wind speed from the JSON object
        console.log(city,icon,temp,description,humidity,wind); // Logs the variales to the console to ensure the proper values are saved
        document.querySelector('.city').innerHTML = "Weather in " + city; // Change the city 
        document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + ".png"; // Change the ICON
        document.querySelector('.temp').innerHTML = temp + "°C"; // Change the temp
        document.querySelector('.description').innerHTML = description; // Change the description
        document.querySelector('.humidity').innerHTML = "Humidity: " + humidity + "%"; // Change the humidity
        document.querySelector('.wind').innerHTML = "Wind Speed: " + wind + " km/h"; // Change the wind speed
    },
    search: function(){ // Gets the value of the search bar and passes it to the fetchWeather function
        this.fetchWeather(document.querySelector('.search-bar').value);
        }
}

// Adds event listener for the search bar click

document.querySelector('.search button').addEventListener("click", () => {
        weather.search();
    });
