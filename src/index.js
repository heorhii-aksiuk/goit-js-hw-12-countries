//styles
import './sass/main.scss';
//libs
import debounce from 'lodash.debounce'
import { error, notice } from '@pnotify/core';
import { errorSetup, noticeSetup } from './js/pnotify-setup';
import '@pnotify/core/dist/BrightTheme.css';
//templates
import countryCardTemplate from './templates/country-info.hbs';
import countriesListTemplate from './templates/countries-list.hbs'
//refs
import refs from './js/refs';
const { inputEl, templateContainerEl } = refs;
//fetch
import { fetchCountries } from './js/fetch-countries';

/* */

inputEl.addEventListener('input', debounce(searchCountry, 500));

function searchCountry(event) {
  let searchQuery = event.target.value.trim();
  templateContainerEl.innerHTML = '';
  if (!searchQuery == (/[^a-zA-Z]/g, '') || searchQuery === '') return;
    fetchCountries(searchQuery).then(createMarkup);
}

function createMarkup(data) {
  if (data.status === 404) {
    notice(noticeSetup);
  } else if (data.length === 1) {
    templateContainerEl.innerHTML = countryCardTemplate(data[0]);
  } else if (data.length < 10) {
    templateContainerEl.innerHTML = countriesListTemplate(data);
  } else {
    error(errorSetup);
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

