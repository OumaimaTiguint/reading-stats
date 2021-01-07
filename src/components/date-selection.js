import React from 'react';
import dt2020 from '../data/2020.json';
import dt2021 from '../data/2021.json';
import '../App.css';

export let data = dt2021;

class DateSelection extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        if(e.target.innerText === '2020') {
            data = dt2020
        } else if(e.target.innerText === '2021') {
            data = dt2021
        }
        console.log(data)
    }

    render() {
        return (
            <div>
               <button onClick={this.handleClick}>2020</button> 
               <button onClick={this.handleClick}>2021</button> 
            </div>
        )
    }
}

export default DateSelection;