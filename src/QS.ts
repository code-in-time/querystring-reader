abstract class QS {

  private static url: string = window.location.search

  private static splitIntoObject(): object {
    const urlArr = this.url.slice(1).split('&')

    let obj = {}

    urlArr.forEach((v:any) => {
      let arr = v.split('=')
      obj[arr[0]] = arr[1]
    })

    return obj
  }

  public static showURLQueryString(): object {
    return this.splitIntoObject();
  }
}

export default QS;
