import React from 'react';
//import dt2020 from '../data/2020.json';
import data from '../data/2021.json';
import Rating from '@material-ui/lab/Rating';
import '../App.css';

class List extends React.Component {
    render() {
        return (
            <div className="list">
                <h2>Everything I read this year</h2>
                <div className="list-content">
                {
                    data.data.map(e => {
                        return (
                            <div className="card">
                                <img alt={e.title} src={e.img} /><br/>
                                <Rating 
                                    className="rating" 
                                    name="half-rating-read" 
                                    defaultValue={e.rating} 
                                    precision={0.5} 
                                    readOnly />
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

export default List;