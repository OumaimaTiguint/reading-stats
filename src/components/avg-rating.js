import React from 'react';
import data0 from '../data/2020.json';
import data1 from '../data/2021.json';
import Rating from '@material-ui/lab/Rating';
import '../App.css';

let sum = 0;
let n;
const date = localStorage.getItem('date')
if(date === '2020') {
    data0.data.map(e => {
        sum = sum + e.rating;
        return sum;
    })
    n = (sum/data0.data.length).toFixed(2)
} else if(date === '2021') {
    data1.data.map(e => {
        sum = sum + e.rating;
        return sum;
    })
    n = (sum/data1.data.length).toFixed(2)
} else {
    data1.data.map(e => {
        sum = sum + e.rating;
        return sum;
    })
    n = (sum/data1.data.length).toFixed(2)
}

class AvgRating extends React.Component {
    render() {
        return (
            <div className="pages">
                <h3>Average Rating:<small>{n}</small></h3>
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