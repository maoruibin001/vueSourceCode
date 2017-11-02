/**
 * Created by lenovo on 2017/11/1.
 */
const EventEmitter = require('events');
var count  = 0;
function sth () {
  emitter.on('myEvent', sth);
  // emitter.on('myEvent', sth);
  emitter.emit('myEvent');
  console.log('hi');
  count ++;
}
let emitter = new EventEmitter();

emitter.on('myEvent', sth);

emitter.emit('myEvent');

console.log(count);
