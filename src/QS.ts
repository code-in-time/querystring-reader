import { IQS } from './interface'

class QS implements IQS {

  private url: string = "?test=1&g=2&hhh=8"

  private splitIntoObject() {
    const urlArr = this.url.slice(1).split('&')

    const s = urlArr
  }

  showURLQueryString() {
    return this.url
    console.log('')
  }
}

export default new QS().showURLQueryString();

