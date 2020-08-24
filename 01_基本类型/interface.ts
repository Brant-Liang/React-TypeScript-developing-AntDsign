interface Person {
  name: string;
  age?: number; //?为可选属性
  readonly id: number; //只读属性
}
let brant: Person = {
  name: 'Brant',
  age: 20,
  id: 1234
}