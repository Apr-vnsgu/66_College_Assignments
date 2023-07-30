const { EventEmitter } = require('events');
const event = new EventEmitter();
event.on('event1', () => {
  console.log('event 1 emitted');
});
setTimeout(() => {
  event.emit('event1');
}, 5000);
