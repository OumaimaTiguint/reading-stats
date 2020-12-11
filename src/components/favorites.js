import React from 'react';
import '../App.css';

const favorites = [
    {title: "Darkdawn", img: "darkdawn.jpg"},
    {title: "Godsgrave", img: "godsgrave.jpg"},
    {title: "How To Stop Time", img: "howtostop.jpg"},
    {title: "Invisible Women", img: "invisiblewomen.jpg"},
    {title: "Maybe You Should Talk To Someone", img: "maybe.jpg"},
    {title: "Miracle Creek", img: "miraclecreek.jpg"},
    {title: "Nevernight", img: "nevernight.jpg"},
    {title: "Reasons To Stay Alive", img: "reasonstostay.jpg"},
    {title: "Scythe", img: "scythe.jpg"},
    {title: "Station Eleven", img: "stationeleven.jpg"},
    {title: "The body: A Guide for Occupants", img: "thebody.jpg"},
    {title: "The Midnight Library", img: "themidnightlibrary.jpg"},
    {title: "The Toll", img: "thetoll.jpg"},
    {title: "Thunderhead", img: "thunderhead.jpg"},
    {title: "أرض زيكولا", img: "zikola.jpg"},
    {title: "The Devil and The Dark Water", img: "devil.jpg"},
    {title: "The Burning God", img: "theburninggod.jpg"},
    {title: "One By One", img: "onebyone.jpg"}
]

class Favorites extends React.Component {
    render() {
        return(
            <div className="favorites">
                <h2>Favorites</h2>
                {favorites.map((elem, i) => <img key={i} alt={elem.title} src={require('../favorites/' + elem.img)}/>)}
            </div>
            
        )
    }
}

export default Favorites;