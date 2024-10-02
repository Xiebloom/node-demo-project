const getInput = require('./09-rock-game');

// 持续获得输入流
process.stdin.on('data', e => {
  const input = e.toString().trim();

  if (input === 'exit') {
    process.exit()
  }
})