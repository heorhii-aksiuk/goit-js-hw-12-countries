import './sass/main.scss';

import countryCardTemplate from './templates/country-info.hbs';
import countriesListTemplate from './templates/countries-list.hbs'
import debounce from 'lodash.debounce'

const refs = {
  bodyEl: document.querySelector('body'),
  inputEl: document.querySelector('input'),
  formEl: document.querySelector('form'),
  countriesEl: document.querySelector('.countries-info-container'),
};

const { bodyEl, inputEl, formEl, countriesEl } = refs;

inputEl.addEventListener('input', debounce(searchCountry, 500));

function searchCountry(event) {
  event.preventDefault();
  let searchQuery = event.target.value;
  console.dir(event.target.value);
  countriesEl.innerHTML = '';

  fetchCountries(searchQuery).then(createCountryCard);

}

// fetchCountries(searchQuery);

function fetchCountries(searchQuery) {
return fetch(`https://restcountries.com/v2/name/${searchQuery}`)
  .then(data => data.json())
}

function createCountryCard(data) {
  console.log(data.length);
  if (data.length === 1) {
    countriesEl.innerHTML = countryCardTemplate(data[0]);
  } else {
    countriesEl.innerHTML = countriesListTemplate(data);
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

