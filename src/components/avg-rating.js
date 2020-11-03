import React from 'react';
import data from '../data.json';
import Rating from '@material-ui/lab/Rating';
import '../App.css';

let sum = 0;

data.data.map(e => {
    sum = sum + e.rating;
    return sum;
})

let n = (sum/data.data.length).toFixed(2)

class AvgRating extends React.Component {
    render() {
        return (
            <div className="pages">
                <h3>Average Rating: </h3>
                <Rating 
                    className="rating" 
                    name="half-rating-read" 
                    defaultValue={n} 
                    precision={0.5} 
                    readOnly />
            </div>
        )
    }
}

export default AvgRating;