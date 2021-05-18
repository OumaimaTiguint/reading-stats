//import dt2020 from '../data/2020.json';
import data from '../data/2021.json';

let usa = 0;
let uk = 0;
let cnd = 0;
let aus = 0;
let jpn = 0;
let egpt = 0;
let irlnd = 0;
let skr = 0;
let swdn =0;
let frnc = 0;
let china = 0;
let sudan = 0;
let philippines = 0

data.data.map(elem => {
    if(elem.country === 'USA') {
        usa++
    } else if(elem.country === 'UK') {
        uk++
    } else if(elem.country === 'Australia') {
        aus++
    } else if(elem.country === 'Japan') {
        jpn++
    } else if(elem.country === 'Egypt') {
        egpt++
    } else if(elem.country === 'Canada') {
        cnd++
    } else if(elem.country === 'Ireland') {
        irlnd++
    } else if(elem.country === 'South Korea') {
        skr++
    } else if(elem.country === 'Sweden') {
        swdn++
    } else if(elem.country === 'France') {
        frnc++
    } else if(elem.country === 'China') {
        china++
    } else if(elem.country === 'Sudan') {
        sudan++
    } else if(elem.country === 'Philippines') {
      philippines++
  }
    return {usa, uk, aus, jpn, egpt, cnd, irlnd, skr, swdn, frnc, china, sudan, philippines};
})

export const markers = {
    type: 'FeatureCollection',
    features: [
      {
        coordinates: [-95.6650, 37.6000],
        text: 'USA',
        value: usa
      },
      {
        coordinates: [-3.4433, 55.3618],
        text: 'UK',
        value: uk
      },
      {
        coordinates: [133.2813, -26.4391],
        text: 'Australia',
        value: aus
      },
      {
        coordinates: [-96.0000, 56.0000],
        text: 'Canada',
        value: cnd
      },
      {
        coordinates: [139.745438, 35.658581],
        text: 'Japan',
        value: jpn
      },
      {
        coordinates: [26.8358, 30.7957],
        text: 'Egypt',
        value: egpt
      },
      {
        coordinates: [-8.24389, 53.41291],
        text: 'Ireland',
        value: irlnd
      },
      {
        coordinates: [127.024612, 37.532600],
        text: 'South Korea',
        value: skr
      },
      {
        coordinates: [18.063240, 59.334591],
        text: 'Sweden',
        value: swdn
      },
      {
        coordinates: [1.7191, 46.7111],
        text: 'France',
        value: frnc
      },
      {
        coordinates: [104.1361, 35.8593],
        text: 'China',
        value: china
      },
      {
        coordinates: [122.6217542, 11.6978352],
        text: 'Philippines',
        value: philippines
      },
      {
        coordinates: [30.1996, 15.7861],
        text: 'Sudan',
        value: sudan
      },
    ].map(data => {
        return {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: data.coordinates
            },
            properties: {
                text: data.text,
                value: data.value,
                tooltip: `<b>${ data.text }</b>\n${ data.value }`
            }
        };
    })
};

