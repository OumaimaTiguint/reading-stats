import React from 'react';
//import dt2020 from '../data/2020.json';
import { data } from './date-selection';
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
                '#ff6666',
                '#779876'
            ],
            hoverBackgroundColor: [
                '#901600',
                '#00580a'
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