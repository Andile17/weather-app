
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
  
export default Weather