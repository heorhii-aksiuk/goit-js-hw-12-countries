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
  contry = event.target.value;
  countriesEl.innerHTML = '';

return fetch(`https://restcountries.com/v2/name/${event.target.value}`)
  .then(data => data.json())
  .then(data => countriesEl.innerHTML = markup(data[0]));
}




