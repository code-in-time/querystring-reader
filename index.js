class QS {
  constructor() {
    this.url = window.location.search;
  }

  showURLQueryString() {
    return this.url;
  }
}

export default new QS().showURLQueryString();
