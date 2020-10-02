import React from 'react';
import data from '../data.json';
import '../App.css';

let sum = 0;

data.data.map(e => {
    sum = sum + e.rating;
    return sum;
})

class AvgRating extends React.Component {
    render() {
        return (
            <div className="App">
                <h3>Average Rating: {(sum/data.data.length).toFixed(2)}/5</h3>
            </div>
        )
    }
}

export default AvgRating;