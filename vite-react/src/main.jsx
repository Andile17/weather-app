/*import { createRoot } from 'react-dom/client'
/*
function Car() {
  return (
    <>
    <h1>My Car</h1>
    <p>I thought it was a Ford Mustang</p>
    </>
  );
}
createRoot(document.getElementById('root')).render(
  
  <Car/>
) 
  */

/*

import { createRoot } from 'react-dom/client'

//write a component that takes  ktw and returns the argument multiplied by 136

//then a component that prints "my car has AmountOfKTW" by calling our ktw function

function getKTW(ktw) {
  return ktw * 1.36
}

function Car() {
  return (
    <>
    <h1>My Car</h1>
    <p>My Car is a mustang and it has {getKTW(4)} ktw</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Car/>
 
) 

*/

/*

import { createRoot } from 'react-dom/client'

//create a component that returns a paragraph, using the values from an object


function Intro() {
  const myObject = {
  'name': "Andile",
  'age': 42,
  'nationality': "South African"
}
  return (
    <>
    <p>My name is {myObject.name}, i'm {myObject.age} years old and i'm from {myObject.nationality}</p>

    </>
  );
}



createRoot(document.getElementById('root')).render(
  <Intro />
 
) 

*/

/*

import { createRoot } from 'react-dom/client'

//write a component that takes  ktw and returns the argument multiplied by 136

//then a component that prints "my car has AmountOfKTW" by calling our ktw function

function getKTW(ktw) {
  return ktw * 1.36
}

function Car() {
  const myCar = {
  'name': 'mustang'
}
  return (
    <>
    <h1>My Car</h1>
    <p>My Car is a {myCar.name} and it has {getKTW(4)} ktw</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Car/>
 
) 

*/

/*
import { createRoot } from 'react-dom/client'

function Car() {
  const myfunc = () => {
    alert('Hello World');
  };
  return (
    <button onClick={myfunc}>Click me</button>
  );
}

createRoot(document.getElementById('root')).render(

  <Car/>
)
  */

/*
import { createRoot } from "react-dom/client";

function Car() {
  const mystyles = {
    color: "red",
    fontSize: "20px",
    backgroundColor: "lightyellow",
  };
    const weatherCard = {
    'city': 'Johannesburg',
    'weatherCondition': 'Sunny',
    'temperature': 11,
    'humidity': 45

  };

  return (
    <>
      <h1 style={mystyles}>My car</h1>
      <p>{weatherCard.city}</p>
    <p>{weatherCard.weatherCondition}</p>
    <p>Temperature: {weatherCard.temperature}</p>
    <p>Humidity: {weatherCard.humidity}</p>
    </>
  );
}

createRoot(document.getElementById("root")).render(
<Car/>
)

*/
/*
import { createRoot} from 'react-dom/client'

function myCar() {
  const weatherCard = {
    'city': 'Johannesburg',
    'weatherCondition': 'Sunny',
    'temperature': 11,
    'humidity': 45

  }

  return (
    <>
    <h1>Weather Card</h1>
      
    <p>{weatherCard.city}</p>
    <p>{weatherCard.weatherCondition}</p>
    <p>Temperature: {weatherCard.temperature}</p>
    <p>Humidity: {weatherCard.humidity}</p>
    

    </>
  );
}

createRoot(document.getElementById('root')).render(
<myCar />
)

*/



import { createRoot } from "react-dom/client";

/*

function Weather() {

    const weatherCard = {
    'city': 'Johannesburg',
    'weatherCondition': 'Sunny',
    'temperature': 11,
    'humidity': 45

  }

  return (
    <>
      <h1>The Weather</h1>
      <p>{weatherCard.city}</p>
    <p>{weatherCard.weatherCondition}</p>
    <p>Temperature: {weatherCard.temperature}</p>
    <p>Humidity: {weatherCard.humidity}</p>

    


    </>
  );
}

*/

import Weather  from "./components/weatherCard";

function WeatherCard() {
    return (
        <div>
            <h2>Johannesburg</h2>
            <p>Sunny</p>
            <p>11°C</p>
        </div>
    );
}

export default WeatherCard;

createRoot(document.getElementById("root")).render(
<Weather/>
)

