import React from 'react';
import data from '../data.json';
import {Doughnut} from 'react-chartjs-2';

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
            <div className="App">
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