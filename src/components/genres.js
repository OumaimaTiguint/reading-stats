import React from 'react';
import data from '../data.json';
import {Doughnut} from 'react-chartjs-2';
import '../App.css';

let scifi = 0;
let fantasy = 0;
let contemporary = 0;
let classic = 0;
let thriller = 0;

data.data.map(e => {
    if(e.genres.includes('sci-fi')) {
        return scifi ++;
    } else if(e.genres.includes('fantasy')) {
        return fantasy ++;
    } else if(e.genres.includes('contemporary')) {
        return contemporary ++;
    } else if(e.genres.includes('classic')) {
        return classic ++;
    } else if(e.genres.includes('thriller')) {
        return thriller ++;
    }
    return { scifi, fantasy, contemporary, classic, thriller }
})

const state = {
    labels: ['science fiction', 'fantasy', 'contemporary', 'classics', 'thriller/mystery/horror'],
    datasets: [
        {
            label: 'Genres',
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#e9a6af',
                '#898484',
                '#c6ab81'
            ],
            hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#876974',
                '#261228',
                '#d7a036'
            ],
            data: [scifi, fantasy, contemporary, classic, thriller]
        }
    ]
}

class Genres extends React.Component {
    render() {
        return (
            <div className="components">
                <Doughnut
                    data={state}
                    options={{
                        title:{
                            display:true,
                            text:'Genres',
                            fontSize:20
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }}
                />
            </div>
        )
    }
}

export default Genres;