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
