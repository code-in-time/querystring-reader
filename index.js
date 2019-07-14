class querystringreader {
  constructor() {
    this.url = window.location.search;
  }

  showURLQueryString() {
    return this.url;
  }
}

export default new querystringreader().showURLQueryString();
