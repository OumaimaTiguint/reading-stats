import React from 'react';
import data from '../data.json';
import {Doughnut} from 'react-chartjs-2';
import '../App.css';

let english = 0;
let french = 0;
let arabic = 0;

data.data.map(e => {
    if(e["Lang-read"]==="english") {
        return english ++;
    } else if(e["Lang-read"]==="french") {
        return french ++;
    } else if(e["Lang-read"]==="arabic") {
        return arabic ++;
    } 
    return { english, french, arabic }
})

const state = {
    labels: ['English', 'French', 'Arabic'],
    datasets: [
        {
            label: 'Languages Read',
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#9a5863'
            ],
            hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#876974'
            ],
            data: [english, french, arabic]
        }
    ]
}

class languagesRead extends React.Component {
    render() {
        return (
            <div className="components">
                <Doughnut
                    data={state}
                    options={{
                        title:{
                            display:true,
                            text:'Languages read',
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

export default languagesRead;