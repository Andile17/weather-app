import forecastData from "./forcastData";
import "./Forecast.css";

function Forecast() {
  return (
    <section className="forecast">
      <header className="forecast-header">
        <p className="forecast-eyebrow">5-day weather</p>
        <h1>Johannesburg forecast</h1>
        <p className="forecast-description">
          A simple look at the week ahead.
        </p>
      </header>

      <div className="forecast-list">
        {forecastData.map(({ day, condition, high, low, icon }) => (
          <article className="forecast-day" key={day}>
            <h2>{day}</h2>
            <img className="forecast-icon" src={icon} alt="" />
            <p className="forecast-condition">{condition}</p>
            <p className="forecast-temperatures">
              <strong>{high}°</strong>
              <span>{low}°</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Forecast;
