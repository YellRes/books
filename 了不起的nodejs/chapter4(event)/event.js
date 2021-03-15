let eventEmitter = require('events').EventEmitter
let a = new eventEmitter

a.on('event', function() {
  console.log('event called')
})

a.emit('event')

