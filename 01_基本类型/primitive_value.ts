// 布尔类型
let isDone: boolean = false

let age: number = 12
let binaryNumber: number = 0b1111

let firstName: string = 'Brant'
let message: string = `hello, ${firstName}, age is ${age}`

let u: undefined = undefined
let n: null = null

let num: number = undefined
let notSure: any = 4
notSure.myName
notSure.getName()

let numberOrString: number | string = 234
numberOrString = 'abc'


// 数组
let arrOfNumber: number[] = [1, 2, 3, 4]
arrOfNumber.push(5)

function test() {
  console.log(arguments)
  let arr: IArguments = arguments
  let htmlCollection: HTMLAllCollection
}

// 元组
let user: [string, number] = ['brant', 18]