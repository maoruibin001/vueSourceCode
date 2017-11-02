/**
 * Created by lenovo on 2017/10/31.
 */
var obj = {
  name: 'mao',
  age: {
    msg: '20'
  }
}


var newObj = Object.create(obj);
obj.age.msg = 30;

console.log(newObj.age.msg);