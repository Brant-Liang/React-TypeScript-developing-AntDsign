// 数字枚举
// enum Direction {
//   Up = 10,
//   Down,
//   Left,
//   Right,
// }
// console.log(Direction.Up)
// console.log(Direction[12])

const enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
const value = 'UP'
if(value === Direction.Up) {
  console.log('go up')
}
console.log(Direction.Up)