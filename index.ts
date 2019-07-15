import { IQS } from './interface'

class QS implements IQS {

  private url: string = "?test=1&g=2&hhh=8"

  private splitIntoObject() {
    const urlArr = this.url.slice(1).split('&')
  }

  showURLQueryString() {
    return this.url
  }
}

export default new QS().showURLQueryString();
