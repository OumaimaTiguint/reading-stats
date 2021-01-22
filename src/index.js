import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FicNonFic from './components/fic-nonfic';
import Genres from './components/genres';
import LanguagesRead from './components/languages-read';
import OriginalLang from './components/original-lang';
import Authors from './components/authors';
import Favorites from './components/favorites';
import NewReleases from './components/new-releases';
import AvgRating from './components/avg-rating';
import List from './components/list';
import './App.css';
import MapChart from './components/map';

ReactDOM.render(
  <React.StrictMode>
    <div className="top">
      <App />
      <AvgRating />
    </div>
    <div className="second">
      <Favorites />
      <MapChart />
    </div>
    <div className="third">
      <NewReleases />
      <div className="charts">
        <FicNonFic />
          <Genres />
          <Authors />
          <OriginalLang />
          <LanguagesRead />
      </div>
    </div>
    
    <List />
  </React.StrictMode>,
  document.getElementById('root')
);
