import React from 'react';
//import dt2020 from '../data/2020.json';
import { data } from './date-selection';
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