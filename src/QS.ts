import { IQS } from './interface'

class QS implements IQS {

  private url: string = window.location.search

  private splitIntoObject() {
    const urlArr = this.url.slice(1).split('&')

    let obj = {}

    urlArr.forEach((v:any) => {
      let arr = v.split('=')
      obj[arr[0]] = arr[1]
    })

    return obj
  }

  showURLQueryString() {
    return this.splitIntoObject()
  }
}

export default new QS().showURLQueryString();

