export default class NetflixResultView {

  constructor(el, model) {
    this.el = el;
    this.model = model;
  }

  render() {
    this.el.querySelector('.movie__show-title').innerText = this.model.show_title;
    this.el.querySelector('.movie__show-category').innerText = this.model.category;
    this.el.querySelector('.movie__show-rating').innerText = this.model.rating;
    this.el.querySelector('.movie__show-picture').src = this.model.poster;
    this.el.querySelector('.movie__summary').innerText = this.model.summary;
    this.el.querySelector('.movie__show-cast').innerText = this.model.show_cast;
  }
}

// {
//   "unit": 883,
//   "show_id": 70299043,
//   "show_title": "Attack on Titan",
//   "release_year": "2013",
//   "rating": "4.6",
//   "category": "Anime",
//   "show_cast": "Yuki Kaji, Yui Ishikawa, Marina Inoue, Daisuke Ono, Hiro Shimono, Hiroshi Kamiya, Keiji Fujiwara, Kishô Taniyama, Romi Park, Ryota Ohsaka",
//   "director": "",
//   "summary": "For over a century, people have been living behind barricades to block out the giant Titans that threaten to destroy the human race. When a Titan destroys his hometown, young Eren Yeager becomes determined to fight back.",
//   "poster": "http://netflixroulette.net/api/posters/70299043.jpg",
//   "mediatype": 1,
//   "runtime": "24 min"
// }
