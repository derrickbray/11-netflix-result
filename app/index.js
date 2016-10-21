import 'whatwg-fetch';
import NetflixResultView from './views/netflix-result';
// Create Variables for the search form, search input, and search result
// Create a new instance of the view passing in the result element and an empty object as the arguments
//

const movieEl = document.querySelector('.movie');
const input = document.querySelector('.search__title');
const searchView = new NetflixResultView(movieEl, {});


fetch('http://netflixroulette.net/api/api.php?title=Attack%20on%20titan')
  .then((searchResult) => searchResult.json())
  .then((data) => {
    const movie = data;
    searchView.model = movie;
    searchView.render();
  });
// debugger;
