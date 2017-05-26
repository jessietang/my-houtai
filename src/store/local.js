/**
 * Created by jessietang on 2017/5/26.
 */
const LocalEvent = function (item) {
  this.get = function () {
    return JSON.parse(localStorage.getItem(item))
  }
  this.set = function (obj) {
    localStorage.setItem(item, JSON.stringify(obj))
  }
  this.clear = function () {
    localStorage.removeItem(item)
  }
}

const local = new LocalEvent('myHoutaiData')

export default local
