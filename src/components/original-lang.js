import React from 'react';
import data from '../data.json';
import {Doughnut} from 'react-chartjs-2';
import '../App.css';

let english = 0;
let french = 0;
let arabic = 0;
let japanese = 0;
let swedish = 0;

data.data.map(e => {
    if(e["original-lang"]==="english") {
        return english ++;
    } else if(e["original-lang"]==="french") {
        return french ++;
    } else if(e["original-lang"]==="arabic") {
        return arabic ++;
    } else if(e["original-lang"]==="japanese") {
        return japanese ++;
    } else if(e["original-lang"]==="swedish") {
        return swedish ++;
    } 
    return { english, french, arabic, japanese, swedish }
})

const state = {
    labels: ['English', 'French', 'Arabic', 'Japanese', 'Swedish'],
    datasets: [
        {
            label: 'Original Languages',
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#9a5863',
                '#370518',
                '#1a1a1a'
            ],
            hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#876974',
                '#261228',
                '#d7a036'
            ],
            data: [english, french, arabic, japanese, swedish]
        }
    ]
}

class OriginalLang extends React.Component {
    render() {
        return (
            <div className="components">
                <Doughnut
                    data={state}
                    options={{
                        title:{
                            display:true,
                            text:'Original languages',
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

export default OriginalLang;