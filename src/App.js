import React from 'react';
import './App.css';
import data0 from "./data/2020.json";
import data1 from './data/2021.json';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data1,
      count: 0
    }
  }

  componentDidMount() {
    const date = localStorage.getItem('date')
    if(date === '2020') {
      const pagesArr = [];
      data0.data.map(elem => pagesArr.push(elem.pages))
      this.setState({
        data: data0,
        count: pagesArr.reduce((a, b) => a + b, 0)
      })
    } else if(date === '2021') {
      const pagesArr = [];
      data1.data.map(elem => pagesArr.push(elem.pages))
      this.setState({
        data: data1,
        count: pagesArr.reduce((a, b) => a + b, 0)
      })
    }
  }

  render() {
    return (
      <>
      <div className="title">
          <h1>Reading Stats</h1>
        </div>
      <div className="pages">
        <h2>{this.state.count} Pages over {Object.keys(this.state.data.data).length} Books</h2>
      </div>
      </>
    );
  }
}

export default App;
