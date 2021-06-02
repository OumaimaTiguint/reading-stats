import React from 'react';
//import dt2020 from '../data/2020.json';
import data from '../data/2021.json';
import '../App.css';

let newRelease = [];

data.data.map(e => {
    if(e["pub-date"] === 2021) {
        newRelease.push(e);
    } 
    return newRelease;
})

class NewReleases extends React.Component {
    render() {
        return (
            <div className="n-release">
                <h2>2021 Releases</h2>
                {newRelease.map((elem, i) => (
                    <p key={i}><strong>{elem.title}</strong> by {elem.author}</p>
                ))}
            </div>
        )
    }
}

export default NewReleases;