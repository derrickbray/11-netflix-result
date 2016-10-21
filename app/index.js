import 'whatwg-fetch';
import NetflixResultView from 'views/netflix-result.js';
// Create Variables for the search form, search input, and search result
// Create a new instance of the view passing in the result element and an empty object as the arguments
//

const searchForm;
const searchResult;

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
    console.log('hello');
});
// debugger;

// const uv = new UserView(document.querySelector('.user'), {});
//
// fetch('https://randomuser.me/api')
//   .then((result) => result.json())
//   .then((data) => {
//     const person = data.results[0];
//     console.log(person);
//     uv.model = person;
//     uv.render();
//     document.querySelector('.user__first-name').innerText = person.name.first;
//   });
