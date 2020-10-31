import React from 'react';
import './App.css';
import data from "./data.json";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    const pagesArr = [];
    data.data.map(elem => pagesArr.push(elem.pages))
    const count = pagesArr.reduce((a, b) => a + b, 0);
    //console.log(count)
    this.setState({
      count: count
    })
  }

  render() {
    return (
      <>
      <div className="title">
          <h1>Reading Stats</h1>
        </div>
      <div className="pages">
        <h2>{this.state.count} Pages over {Object.keys(data.data).length} Books</h2>
      </div>
      </>
    );
  }
}

export default App;
