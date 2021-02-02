import React from "react";
import "./Weather.css";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function Weather() {
  let weatherData = {
    city: "Berlin",
    date: "Tuesday 17:00",
    temperature: "17",
    description: "Foggy",
    imgUrl: "http://openweathermap.org/img/wn/01d@2x.png",
    minTemperature: 12,
    maxTemperature: 20,
    humidity: 30,
    wind: 6
  };

  return (
    <div>
      <h1 id="city-name">{weatherData.city}</h1>
      <h2 id="current-time">{weatherData.date}</h2>
    <Container>
      <Row>
        <Col>
              <h3 className="title">
              {weatherData.temperature}
              <span id="measurement">
                <a href="/" id="temperature-celcius" className="active">
                °C
                </a>
                  /
                <a href="/" id="temperature-fahrenheit">
                  °F
                </a>
              </span>
              <br></br>
              <p id="condition"> {weatherData.description}</p>
              </h3>
              <p>
                <img src={weatherData.imgUrl} alt="clear sky"></img>
              </p>
        </Col>
        <Col>
                <h5>Details</h5>
                <ul className="weather-description">
                  <li>Lowest:{weatherData.minTemperature}°C</li>
                  <li>Highest:{weatherData.maxTemperature}°C</li>
                  <li>Humidiy:{weatherData.humidity}%</li>
                  <li>Wind:{weatherData.wind}km/h</li>
                </ul>
        </Col>
      </Row>
    </Container>
    </div>
  );
}
