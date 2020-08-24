class Animal {
  // private name: string;
  readonly name: string;
  // public name: string;
  static categoies: string[] = ['mammal', 'bird']
  static isAnimal(a) {
    return a instanceof Animal
  }
  constructor(name: string) {
    this.name = name
  }
  public run() {
    return this.name + ' is running'
  }
}

const snake = new Animal('snake')
console.log(snake.run())
// snake.name = 'lucy'
console.log(snake.name)

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}

const abiao = new Dog('abiao')
console.log(abiao.run())
console.log(abiao.bark())

class Cat extends Animal {
  constructor(name) {
    super(name);
    console.log(this.name)
  }
  run() {
    return 'Meow, ' + super.run()
  }
}

const maomao = new Cat('maomao');
console.log(maomao.run())