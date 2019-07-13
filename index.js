class UrlReader {
    constructor() {
      this.url = window.location.search;
    }

    showURLQueryString() {
        return this.url;
    }
  }

  export default new UrlReader;
