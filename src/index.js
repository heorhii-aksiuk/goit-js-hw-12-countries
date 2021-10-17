import './sass/main.scss';

import markup from './templates/country-info.handlebars';
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
  let contry = event.target.value;
  countriesEl.innerHTML = '';

return fetch(`https://restcountries.com/v2/name/${contry}`)
  .then(data => data.json())
    .then(data => (countriesEl.innerHTML = markup(data[0])));
  
  // работает только с запросом и строкой запроса, возвращает данные
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
//       .then(data => data);;
//   }


// }

// const fetchCountries = new FetchCountries()

// console.log(fetchCountries.searchQuery);
// fetchCountries.searchQuery = 'test'
// console.log(fetchCountries.getFetch());



