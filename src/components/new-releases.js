import React from 'react';
//import dt2020 from '../data/2020.json';
import { data } from './date-selection';
import '../App.css';

let newRelease = [];

data.data.map(e => {
    if(e["pub-date"] === 2020) {
        newRelease.push(e);
    } 
    return newRelease;
})

class NewReleases extends React.Component {
    render() {
        return (
            <div className="n-release">
                <h2>2020 Releases</h2>
        {newRelease.map((elem, i) => <p key={i}>{elem.title} by {elem.author}</p>)}
            </div>
        )
    }
}

export default NewReleases;