/* 
1. Создать рефы 
2. Cоздать статичкскую разметку 🤏
2. Создать динамическую разметку 
3. Прописать стили
4. Создать запрос на API
*/

import './sass/main.scss';
import markup from './templates/country-info.handlebars';

const refs = {
  body: document.querySelector('body'),
};

console.log(markup());

refs.body.insertAdjacentHTML('afterend', markup());

fetch('https://restcountries.com/v2/name/peru')
  .then(data => data.json())

  .then(data => refs.body.insertAdjacentHTML('afterend', markup(data[0])));
