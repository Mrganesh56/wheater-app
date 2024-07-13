
//********To Display color background and get temperature******//

// import React, { useState } from "react";

// const App = () => {
//   const [city, setCity] = useState("");
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState(null);

//   const API_KEY = "f37ca1b0673b7b61c94b8749bd865627";
//   const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

//   const fetchWeather = async () => {
//     try {
//       const response = await fetch(BASE_URL);
//       if (!response.ok) {
//         throw new Error("City not found");
//       }
//       const data = await response.json();
//       setWeatherData(data);
//       setError(null);
//     } catch (err) {
//       setError(err.message);
//       setWeatherData(null);
//     }
//   };

//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       minHeight: '100vh',
//       background: 'linear-gradient(to top, #0b486b, #f56217)',
//       padding: '20px',
//       color: '#fff',
//       textShadow: '1px 1px 2px #000'
//     }}>
//       <h1 style={{ marginBottom: '20px' }}>Weather App</h1>
//       <div style={{ marginBottom: '20px' }}>
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter city name"
//           style={{ color:'blue',padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//         />
//         <button
//           onClick={fetchWeather}
//           style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#007BFF', color: '#fff', cursor: 'pointer' }}
//         >
//           Get Weather
//         </button>
//       </div>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {weatherData && (
//         <div style={{
//           textAlign: 'justify',
//           backgroundColor: 'rgba(255, 255, 255, 0.8)',
//           padding: '20px',
//           borderRadius: '10px',
//           boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//           width: '300px',
//           color: '#000',
//         //   textShadow: 'none'
//         }}>
//           <h2 style={{ textAlign: 'center' }}>{weatherData.name}, {weatherData.sys.country}</h2>
//           <p>Coordinates: ({weatherData.coord.lat}, {weatherData.coord.lon})</p>
//           <p>Temperature: {weatherData.main.temp}°C</p>
//           <p>Pressure: {weatherData.main.pressure} hPa</p>
//           <p>Humidity: {weatherData.main.humidity}%</p>
//           <p>Wind Speed: {weatherData.wind.speed} m/s</p>
//           <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
//           <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

//********To Display image background and get temperature******//

// import React, { useState } from "react";

// const App = () => {
//   const [city, setCity] = useState("");
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState(null);

//   const API_KEY = "f37ca1b0673b7b61c94b8749bd865627";
//   const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

//   const fetchWeather = async () => {
//     try {
//       const response = await fetch(BASE_URL);
//       if (!response.ok) {
//         throw new Error("City not found");
//       }
//       const data = await response.json();
//       setWeatherData(data);
//       setError(null);
//     } catch (err) {
//       setError(err.message);
//       setWeatherData(null);
//     }
//   };

//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       minHeight: '100vh',
//       background: `url('https://cdn.wallpapersafari.com/31/46/GgyrPf.jpg')`,
//       backgroundSize: 'cover',
//       padding: '20px',
//       color: '#fff',
//       textShadow: '1px 1px 2px #000'
//     }}>
//       <h1 style={{ marginBottom: '20px' }}>Weather App</h1>
//       <div style={{ marginBottom: '20px' }}>
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter city name"
//           style={{ color:'Black', padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor:"White" }}
//         />
//         <button
//           onClick={fetchWeather}
//           style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#007BFF', color: '#fff', cursor: 'pointer' }}
//         >
//           Get Weather
//         </button>
//       </div>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {weatherData && (
//         <div style={{
//           textAlign: 'justify',
//           backgroundColor: 'rgba(255, 255, 255, 0.8)',
//           padding: '20px',
//           borderRadius: '10px',
//           boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//           width: '300px',
//           color: '#000',
//           textShadow: 'none'
//         }}>
//           <h2 style={{ textAlign: 'center' }}>{weatherData.name}, {weatherData.sys.country}</h2>
//           <p>Coordinates: ({weatherData.coord.lat}, {weatherData.coord.lon})</p>
//           <p>Temperature: {weatherData.main.temp}°C</p>
//           <p>Pressure: {weatherData.main.pressure} hPa</p>
//           <p>Humidity: {weatherData.main.humidity}%</p>
//           <p>Wind Speed: {weatherData.wind.speed} m/s</p>
//           <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
//           <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [input, setInput] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = 'f573151464fc1711ee4385c403eeae74';

  const fetchData = async () => {
    try {
      const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`;
      const response = await axios.get(BASE_URL);
      setWeatherData(response.data);
      setSubmitted(true);
      setError(null);
    } catch (error) {
      setError('Error fetching data');
      console.log('Error Fetching Data: ', error);
    }
  };

  const formatTime = (time) => {
    const date = new Date(time * 1000);
    const options = {
      hour: 'numeric',
      minute: 'numeric'
    };
    return date.toLocaleTimeString([], options);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: `url('https://cdn.wallpapersafari.com/31/46/GgyrPf.jpg')`,
        backgroundSize: 'cover',
        padding: '20px',
        color: '#333', // Changed font color
        textShadow: '1px 1px 2px #fff', // Adjusted text shadow for better readability
      }}
    >
      {/* Search Box */}
      <div className="flex items-center bg-white border-b border-gray-200 p-2 shadow-black shadow-2xl rounded-3xl">
        <input
          type="text"
          className="flex-1 text-center font-semibold font-sans appearance-none bg-transparent border-none w-full text-black mr-3 py-2 px-2 leading-light focus:outline-none"
          placeholder="Enter City Name"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded-3xl"
          onClick={fetchData}
        >
          Submit
        </button>
      </div>

      {/* Weather Details Card */}
      {weatherData && (
        <div className="p-4">
          <div className="text-black font-sans font-semibold text-xl mb-2 text-center">
            Weather Details
          </div>

          <div className="border border-gray-300 p-4 rounded-lg bg-white shadow-2xl shadow-black">
            <p className="mb-4 font-normal font-sans">
              <span className="font-bold">Coordinates:</span> Latitude: {weatherData?.coord?.lat}, Longitude: {weatherData?.coord?.lon}
            </p>
            <p className="mb-2 font-normal font-sans">
              <span className="font-bold">Temperature:</span> {Math.round(weatherData?.main?.temp)}°C
            </p>
            <p className="mb-2 font-normal font-sans">
              <span className="font-bold">Pressure:</span> {weatherData?.main?.pressure} hPa
            </p>
            <p className="mb-2 font-normal font-sans">
              <span className="font-bold">Humidity:</span> {weatherData?.main?.humidity}%
            </p>

            <div className="flex justify-center">
              <p className="mb-2 font-normal font-sans">
                <span className="font-bold">Wind Speed:</span> {weatherData?.wind?.speed}m/s
              </p>
              <p className="mb-2 font-normal font-sans">
                <span className="font-bold"> Sunrise:</span> {formatTime(weatherData?.sys?.sunrise)}
              </p>
              <p className="mb-2 font-normal font-sans">
                <span className="font-bold"> Sunset:</span> {formatTime(weatherData?.sys?.sunset)}
              </p>
            </div>
          </div>
        </div>
      )}
      {error && <p className="text-red-500 text-center">{error}</p>}
    </div>
  );
};

export default App;
