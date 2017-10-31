/**
 * Created by lenovo on 2017/10/30.
 */
module.exports = {
  name: function() {
    console.log(this);
  }
}

function evn(data) {
  this.data = data;
}
evn.prototype = new Event();
console.log(new evn);