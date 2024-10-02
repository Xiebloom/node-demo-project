const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {
  constructor() {
    super()
    setTimeout(() => {
      this.emit('my-event', { test: 'test' })
    }, 2000)
  }

}

module.exports = {
  MyEmitter
}
