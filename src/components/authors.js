import React from 'react';
import data from '../data.json';
import {Doughnut} from 'react-chartjs-2';
import '../App.css';

let female = 0;
let male = 0;

data.data.map(e => {
    if(e.sex==="male") {
        return male ++;
    } else if(e.sex==="female") {
        return female ++;
    } 
    return { male, female }
})

const state = {
    labels: ['Male', 'Female'],
    datasets: [
        {
            label: 'Authors',
            backgroundColor: [
                '#B21F00',
                '#C9DE00'
            ],
            hoverBackgroundColor: [
                '#501800',
                '#4B5000'
            ],
            data: [male, female]
        }
    ]
}

class Authors extends React.Component {
    render() {
        return (
            <div className="components">
                <Doughnut
                    data={state}
                    options={{
                        title:{
                            display:true,
                            text:'Authors',
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

export default Authors;