import 'whatwg-fetch';
import NetflixResultView from './views/netflix-result.js';
// Create Variables for the search form, search input, and search result
// Create a new instance of the view passing in the result element and an empty object as the arguments
//

// const searchForm();
// const searchResult{};
console.log('hello');

const searchInput = NetflixResultView(searchResult, []) {};

searchInput.then((info) => {
  after.innerText = info;
})

const nf = new NetflixResultView(document.querySelector('.movie'), {});

fetch('http://netflixroulette.net/api/api.php?title=Attack%20on%20titan')
.then((searchResult) => searchResult.json())
.then((data) => {
    const movie = data.results[0];
    nf.model = movie;
    nf.render();
});
// debugger;
