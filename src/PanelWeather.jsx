import React, { useState } from "react";
import "./styles/PanelWeather.css"

export default function PanelWeather () {
    const apiKey = import.meta.env.VITE_API_KEY;
    const [cityName, setCityName] = useState("");
    const [cityNameInput, setCityNameInput] = useState("");
    const [dateWeather, setDataWeather] = useState(null);

    const submitAction = async (e) => {
        e.preventDefault();

        const nameCity = cityNameInput.trim();
        if (!nameCity) return;

        const data = await fetchData(nameCity);
        setDataWeather(data);
        setCityName(nameCity);
    }

    const fetchData = async (nameCity) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${apiKey}`);
            if (!response.ok) {
                throw new Error("Could not fetch resource")
            }
            const data = await response.json()

            const weatherDes = data.weather[0].description;
            const temp = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const feels_like = data.main.feels_like;

            return { weatherDes, temp, humidity, windSpeed, feels_like };

        } catch(error) {
            console.error(error);
            return null;
        }
    }

    const kelvinToCelsius = (k) => Math.round(k - 273.15); 
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);


    return (
        <div className="main-panel-weather-app">
            <form onSubmit={submitAction} className="form-search-city-name">
                <div className="search-box">
                    <input 
                        type="text" 
                        name="nameCity" 
                        id="input-name-city" 
                        onChange={(e) => setCityNameInput(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </div>
                {dateWeather && (
                    <div className="weather-info">
                        <div className="name-city">
                            <i className="fi fi-sr-marker" style={{fontSize: "1.5rem"}}></i>
                            <h1>{cityName}</h1>
                        </div>
                        <div className="info-details">
                            <div className="main-info-details">
                                <p style={{fontSize: "5rem", fontWeight: 600}}>{kelvinToCelsius(dateWeather.temp)}°C</p>
                                <p style={{fontSize: "1.5rem"}}>{capitalize(dateWeather.weatherDes)}</p>
                            </div>
                            <div className="sub-info-details">
                                <p style={{fontSize: "1.2rem"}}><p style={{fontWeight: 600}}>Feels Like</p>{kelvinToCelsius(dateWeather.feels_like)}°C</p>
                                <p style={{fontSize: "1.2rem"}}><p style={{fontWeight: 600}}>Humidity</p>{dateWeather.humidity}%</p>
                                <p style={{fontSize: "1.2rem"}}><p style={{fontWeight: 600}}>Wind Speed</p>{dateWeather.windSpeed} m/s</p>
                            </div>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
}