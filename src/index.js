import './sass/main.scss';

import countryCardTemplate from './templates/country-info.hbs';
import countriesListTemplate from './templates/countries-list.hbs'
import debounce from 'lodash.debounce'
import { error, Stack } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

const defaultStack = new Stack({
  dir1: 'down',
  dir2: 'left',
  firstpos1: 25,
  firstpos2: 25,
});

const refs = {
  inputEl: document.querySelector('input'),
  countriesEl: document.querySelector('.countries-info-container'),
};

const { inputEl, countriesEl } = refs;

inputEl.addEventListener('input', debounce(searchCountry, 500));

function searchCountry(event) {
  let searchQuery = event.target.value;
  countriesEl.innerHTML = '';
  // if (searchQuery.length > 1)
    fetchCountries(searchQuery).then(createMarkup);
}


function fetchCountries(searchQuery) {
return fetch(`https://restcountries.com/v2/name/${searchQuery}`)
  .then(data => data.json())
}

function createMarkup(data) {
  if (data.status === 404) return;

  if (data.length === 1) {
    countriesEl.innerHTML = countryCardTemplate(data[0]);
  } else if (data.length < 10) {
    countriesEl.innerHTML = countriesListTemplate(data);
  } else {
    error({
      text: 'Too many matches found. Please enter a more specific query!',
      type: 'error',
      delay: 2000,
      width: '320px',
      animation: 'fade',
      closer: false,
      sticker: false,
      addClass: 'pnotyfy-my-setup',
      stack: defaultStack,
    });
  }
}






















// class FetchCountries {
//   constructor() {
//     this._baseUrl = 'https://restcountries.com/v2/name/';
//     this._searchQuery = 'ukraine';
//   }

//   set searchQuery(value) {
//     return (this._searchQuery = value);
//   }

//   get searchQuery() {
//     return this._searchQuery
//   }

//   getFetch() {
//     let url = this._baseUrl + this._searchQuery;
//     return fetch(url)
//       .then(data => data.json())
//       .then(data => { return data });
//   }


// }

// const fetchCountries = new FetchCountries()

// console.log(fetchCountries.searchQuery);
// console.log(fetchCountries.getFetch());

// const mark = fetchCountries.getFetch().then(data => markup(data));
// console.log(mark);

// countriesEl.innerHTML = mark;

