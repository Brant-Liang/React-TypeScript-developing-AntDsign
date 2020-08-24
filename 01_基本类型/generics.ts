function echo<T>(arg: T): T {
  return arg
}
const str: string = 'str'
const result = echo('str')

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

const result2 = swap(['string', 123])

function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}
const arrs = echoWithArr([1, 2, 3])
interface IWithLength {
  length: number
}
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}
const str2 = echoWithLength('str')
const obj = echoWithLength({ length: 10 })
const arr2 = echoWithLength([1, 2, 3, 4])
// const num1 = echoWithLength(123)


class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item);
  }
  pop(): T {
    return this.data.shift();
  }
}

const queue = new Queue<number>()
const queue2 = new Queue<string>()
queue.push(1)
queue2.push('str')
console.log(queue.pop().toFixed())
// console.log(queue2.pop().toFixed())   false

interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kp1: KeyPair<number, string> = {
  key: 1,
  value: 'str'
}

let kp2: KeyPair<string, number> = {
  key: 'test',
  value: 222
}

let arr: number[] = [1, 2, 3]
let arrTwo: Array<number> = [1, 2, 3]

interface IPlus<T> {
  (a: T, b: T) : T
}
function plus(a: number, b: number): number {
  return a + b
}
function connect(a: string, b: string): string {
  return a + b
}
const a: IPlus<number> = plus
const b: IPlus<string> = connect