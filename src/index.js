import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FicNonFic from './components/fic-nonfic';
import Genres from './components/genres';
import LanguagesRead from './components/languages-read';
import OriginalLang from './components/original-lang';
import Authors from './components/authors';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <FicNonFic />
    <Genres />
    <LanguagesRead />
    <OriginalLang />
    <Authors />
  </React.StrictMode>,
  document.getElementById('root')
);
