/**
 * Created by lenovo on 2017/8/31.
 */
var str = "Visit W3School";
var patt = new RegExp('a',"g");
var result;
ret = [];
while ((result = patt.exec(str)) != null)  {
    ret.push(result);
}
console.log(ret)