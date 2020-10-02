import React from 'react';
import data from '../data.json';
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
            <div className="App">
                <h2>2020 Releases</h2>
        {newRelease.map((elem, i) => <p key={i}>{elem.title} by {elem.author}</p>)}
            </div>
        )
    }
}

export default NewReleases;