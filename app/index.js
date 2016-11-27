import 'whatwg-fetch';
import NetflixResultView from './views/netflix-result';
// Create Variables for the search form, search input, and search result
// Create a new instance of the view passing in the result element and an empty object as the arguments
//
var apiUrl = 'http://netflixroulette.net/api/api.php';
const movieEl = document.querySelector('.movie');
const input = document.querySelector('.search__title');
const searchView = new NetflixResultView(movieEl, {});
const form = document.querySelector('.search');
// const response = document.querySelector('.response');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  fetch(`${apiUrl}?title=${input.value}`)
    .then((searchResult) => searchResult.json())
    .then((data) => {
      const movie = data;
      searchView.model = movie;
      searchView.render();
    });
});

fetch(`${apiUrl}?title=futurama`)
  .then((searchResult) => searchResult.json())
  .then((data) => {
    const movie = data;
    searchView.model = movie;
    searchView.render();
  });
// debugger;
