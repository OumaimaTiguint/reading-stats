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
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div className="chart">
      <FicNonFic />
      <Genres />
      <LanguagesRead />
      <OriginalLang />
      <Authors />
    </div>
    <Favorites />
  </React.StrictMode>,
  document.getElementById('root')
);
