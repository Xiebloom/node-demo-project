/**
 * 在 app 内，可直接使用 lib 定义好的 emitter
 * 这些 emitter 可能会定期发出事件，接收即可
 * 不需要改动底层代码
 */

const { MyEmitter } = require('./12-event-emitter-lib')

const myEmitter = new MyEmitter();

myEmitter.on('my-event', (msg) => {
  console.log({ msg })
});