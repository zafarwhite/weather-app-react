import React, { Component } from 'react';
import './App.css';
import Info from './components/Info.jsx';
import Form from './components/Form.jsx';
import Weather from './components/Weather.jsx';

const API_KEY = 'ab79ab9927d06b230ed3e415310d864d';


export default class App extends Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    wind: undefined,
  }
  
  gettingWeather = async (e) => {
    e.preventDeafault();
    let city =e.target.elements.city.value;

    const api_url = await
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);

    // let wind = data.wind;
    let sunset = data.sys.sunset;
    let date =new Date();
    date.setTime(sunset);
    // let sunset_date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    this.setState({
      temp: data.main.temp,
      wind: data.wind,
      city: data.name,
      country: data.sys.country,
      sunset: date.sunset

    })
  }

  render() {
    return (
      <div className="App-header">
        <div className="main">
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather  /> 
        </div>   
      </div>
    )
  }
}
