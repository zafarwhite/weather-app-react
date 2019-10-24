import React, { Component } from 'react';
import './Weather.css';

export default class Weather extends Component {
    render() {
        const { city, counrty, temp, wind, sunset } = this.props;
        return (
            <div>
                <p>Местоположение: {city} {counrty}</p>
                <p>Температура: {temp}</p>
                <p>Ветер: {wind}</p>
                <p>Заход сольнца: {sunset}</p>
                <p></p>
            </div>
        )
    }
}
