import React from 'react';
import data from '../data.json';
import '../App.css';

class List extends React.Component {
    render() {
        return (
            <div className="App">
                <h2>Eeverything I read in 2020</h2>
        {data.data.map((elem, i) => <p key={i}><strong>{elem.title}</strong> by {elem.author} <strong>{elem.rating}/5</strong></p>)}
            </div>
        )
    }
}

export default List;