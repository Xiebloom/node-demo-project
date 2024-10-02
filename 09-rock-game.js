// 1. 在命令行输入 node 09-rock-game.js rock
// 2. 使用 process.argv 获取输入的参数
// 3. 完成石头剪刀布

function getProcessInput() {
  const input = process.argv;

  // bash: node 09-rock-game.js rock
  // expected ourput
  // [
  //   '/home/ubuntu/.nvm/versions/node/v16.20.2/bin/node',
  //   '/home/ubuntu/lesson/node/09-rock-game.js',
  //   'rock'
  // ]
  console.log(input)

  return input[input.length - 1]
}

getProcessInput();

module.exports = {
  getProcessInput
}
