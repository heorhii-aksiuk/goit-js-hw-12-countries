const BASE_URL = 'https://restcountries.com/v2/name/';

export function fetchCountries(searchQuery) {
  return fetch(BASE_URL + searchQuery)
    .then(data => data.json())
    .catch(error => error);
}
