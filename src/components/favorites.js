import React from 'react';
import '../App.css';
import data from '../data/2021.json';

class Favorites extends React.Component {
    render() {
        return(
            <div className="favorites">
                <h2>Favorites</h2>
                {
                    data.data.map(e => {
                        if(e.favorite) {
                            return <img alt={e.title} src={e.img} />
                        } 
                        return null
                    })
                }
            </div>
            
        )
    }
}

export default Favorites;