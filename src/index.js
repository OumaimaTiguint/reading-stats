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

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AvgRating />
    <div className="chart">
      <FicNonFic />
      <Genres />
      <LanguagesRead />
      <OriginalLang />
      <Authors />
    </div>
    <NewReleases />
    <Favorites />
    <List />
  </React.StrictMode>,
  document.getElementById('root')
);
