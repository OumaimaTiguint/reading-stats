import React from 'react';
import '../App.css';
import data0 from '../data/2020.json';
import data1 from '../data/2021.json';

class Favorites extends React.Component {
    constructor() {
        super();
        this.state = {
            data: data1
        }
    }
    componentDidMount() {
        const date = localStorage.getItem('date')
        if(date === '2020') {
            this.setState({
                data: data0
            })
        } else if(date === '2021') {
            this.setState({
                data: data1
            })
        }
      }
    render() {
        return(
            <div className="favorites">
                <h2>Favorites</h2>
                {
                    this.state.data.data.map(e => {
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