import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
    render() {
        return (
            <form className="form" onSubmit={this.props.weatherMethod}>
                <input 
                    className="cityName" 
                    type="text" name="city" 
                    placeholder="Введите имя вашего города" 
                />
                <button className="btn">Получить  погоду</button>
            </form>
        )
    }
}
