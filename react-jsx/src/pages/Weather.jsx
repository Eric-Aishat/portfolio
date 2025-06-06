
import React, { useState } from 'react';




const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
        setError('');
        setCity('');
        
        setTimeout(() => {
            setWeather(null);
          }, 5000);

      } else {
        setWeather(null);
        setError('City not found');
      }
    } catch {
      setWeather(null);
      setError('Error fetching data');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-gray-500 dark:bg-gray-800 text-classicNavy dark:text-white rounded shadow-md mt-10 ">
      <h2 className="text-2xl font-bold text-center mb-6">Weather App</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 px-4 py-2 border rounded focus:outline-none dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={fetchWeather}
          className="bg-classicGold text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Search
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {weather && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">{weather.name}, {weather.sys.country}</h3>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;