
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
//           Submit
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
  const [dailyData, setDailyData] = useState([]);
  const [error, setError] = useState(null);

  const API_KEY = 'f573151464fc1711ee4385c403eeae74';

  const fetchData = async () => {
    try {
      const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`;
      const response = await axios.get(BASE_URL);
      setWeatherData(response.data);

      const { lon, lat } = response.data.coord;
      const DAILY_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}&units=metric`;
      const dailyResponse = await axios.get(DAILY_URL);
      setDailyData(dailyResponse.data.daily.slice(1, 7)); // Get next 6 days of data

      setError(null);
    } catch (error) {
      // setError('Error fetching data');
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

  const formatDate = (time) => {
    const date = new Date(time * 1000);
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString([], options);
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
        color: '#fff',
        textShadow: '1px 1px 2px #000',
      }}
    >
      {/* Search Box */}
      <div className="flex items-center bg-transparent border-b border-gray-200 p-2 shadow-black shadow-2xl rounded-3xl mb-6">
        <input
          type="text"
          className="flex-1 text-center font-semibold font-sans appearance-none bg-transparent border-none w-full text-white mr-3 py-2 px-2 leading-light focus:outline-none"
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
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          
          backgroundColor: 'bg-transparent', // Increased transparency
          borderRadius: '20px',
          padding: '20px',
          width: '350px',
          boxShadow: '0 0 20px rgba(0,0,0,0.1)',
          textAlign: 'center',
          color: 'white',
          marginTop: '20px',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '20px',
          }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: '10px 0' }}>
              {weatherData.name}, {weatherData.sys.country}
            </h2>
            <div style={{ fontSize: '48px', fontWeight: 'bold' }}>
              {Math.round(weatherData.main.temp)}°C
            </div>
            <div style={{ fontSize: '18px', color: '#666', marginBottom: '10px' }}>
              {weatherData.weather[0].description}
            </div>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: '10px',
          }}>
            <div>
              <div><span style={{ fontWeight: 'bold' }}>High:</span> {Math.round(weatherData.main.temp_max)}°C</div>
              <div><span style={{ fontWeight: 'bold' }}>Low:</span> {Math.round(weatherData.main.temp_min)}°C</div>
            </div>
            <div>
              <div><span style={{ fontWeight: 'bold' }}>Humidity:</span> {weatherData.main.humidity}%</div>
              <div><span style={{ fontWeight: 'bold' }}>Wind:</span> {weatherData.wind.speed} m/s</div>
            </div>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: '10px',
          }}>
            <div><span style={{ fontWeight: 'bold' }}>Sunrise:</span> {formatTime(weatherData.sys.sunrise)}</div>
            <div><span style={{ fontWeight: 'bold' }}>Sunset:</span> {formatTime(weatherData.sys.sunset)}</div>
          </div>
        </div>
      )}

      {/* Daily Forecast */}
      {dailyData.length > 0 && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.6)', // Increased transparency
          borderRadius: '20px',
          padding: '10px',
          width: '350px',
          boxShadow: '0 0 20px rgba(0,0,0,0.1)',
          textAlign: 'center',
          color: '#333',
          marginTop: '20px',
        }}>
          {dailyData.map((day, index) => (
            <div key={index} style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: '10px',
              borderBottom: '1px solid #ddd',
              paddingBottom: '10px'
            }}>
              <div style={{ fontWeight: 'bold' }}>{formatDate(day.dt)}</div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="weather icon" style={{ marginRight: '10px' }} />
                <div>{Math.round(day.temp.day)}°C</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
    </div>
  );
};

export default App;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');
//   const [editTaskId, setEditTaskId] = useState(null);
//   const [editTaskText, setEditTaskText] = useState('');
//   const [imageUrl, setImageUrl] = useState('');

//   useEffect(() => {
//     fetchImage();
//   }, []);

//   const fetchImage = async () => {
//     try {
//       const response = await axios.get('https://picsum.photos/200/300');
//       setImageUrl(response.request.responseURL);
//     } catch (error) {
//       console.error('Error fetching image', error);
//     }
//   };

//   const addTask = () => {
//     if (newTask.trim() === '') return;

//     const newTaskObject = {
//       id: Date.now(),
//       text: newTask,
//       completed: false,
//     };
//     setTasks([...tasks, newTaskObject]);
//     setNewTask('');
//   };

//   const deleteTask = (taskId) => {
//     setTasks(tasks.filter(task => task.id !== taskId));
//   };

//   const editTask = (taskId) => {
//     setEditTaskId(taskId);
//     const taskToEdit = tasks.find(task => task.id === taskId);
//     setEditTaskText(taskToEdit.text);
//   };

//   const saveTask = (taskId) => {
//     setTasks(tasks.map(task => (task.id === taskId ? { ...task, text: editTaskText } : task)));
//     setEditTaskId(null);
//     setEditTaskText('');
//   };

//   const toggleCompleteTask = (taskId) => {
//     setTasks(tasks.map(task => (task.id === taskId ? { ...task, completed: !task.completed } : task)));
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>To-Do List</h1>
//         <img src={imageUrl} alt="Random" />
//         <div className="task-input">
//           <input
//             type="text"
//             value={newTask}
//             onChange={(e) => setNewTask(e.target.value)}
//             placeholder="Add a new task"
//           />
//           <button onClick={addTask}>Add Task</button>
//         </div>
//         <ul className="task-list">
//           {tasks.map((task) => (
//             <li key={task.id} className={task.completed ? 'completed' : ''}>
//               {editTaskId === task.id ? (
//                 <>
//                   <input
//                     type="text"
//                     value={editTaskText}
//                     onChange={(e) => setEditTaskText(e.target.value)}
//                   />
//                   <button onClick={() => saveTask(task.id)}>Save</button>
//                 </>
//               ) : (
//                 <>
//                   <span onClick={() => toggleCompleteTask(task.id)}>{task.text}</span>
//                   <button onClick={() => editTask(task.id)}>Edit</button>
//                   <button onClick={() => deleteTask(task.id)}>Delete</button>
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>
//       </header>
//     </div>
//   );
// }

// export default App;
