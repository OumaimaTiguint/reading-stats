import React from 'react';
import '../App.css';

const favorites = [
    { title: 'The Final Empire', img: 'the-final-empire.jpg' }
]

class Favorites extends React.Component {
    render() {
        return(
            <div className="favorites">
                <h2>Favorites</h2>
                {favorites.map((elem, i) => <img key={i} alt={elem.title} src={require('../favorites/2021/' + elem.img)}/>)}
            </div>
            
        )
    }
}

export default Favorites;