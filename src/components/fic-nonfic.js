import React from 'react';
//import dt2020 from '../data/2020.json';
import { data } from './date-selection';
import {Doughnut} from 'react-chartjs-2';
import '../App.css';

let fic = 0;
let nonfic = 0;

data.data.map(e => {
    if(e.genres.includes('fiction')) {
        return fic ++;
    } else if(e.genres.includes('non-fiction')) {
        return nonfic ++;
    }
    return {fic, nonfic}
})

const state = {
    labels: ['fiction', 'non-fiction'],
    datasets: [
        {
            label: 'fiction and non-fiction',
            backgroundColor: [
                '#B21F00',
                '#C9DE00'
            ],
            hoverBackgroundColor: [
                '#501800',
                '#4B5000'
            ],
            data: [fic, nonfic]
        }
    ]
}

class FicNonFic extends React.Component {
    render() {
        return (
            <div className="components">
                <Doughnut
                    data={state}
                    options={{
                        title:{
                            display:true,
                            text:'Fiction and Non fiction',
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

export default FicNonFic;