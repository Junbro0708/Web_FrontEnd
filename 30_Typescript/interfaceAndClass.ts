abstract class Parent {
  constructor(  
    protected firstName: string,
    protected lastName: string
  ) {}
  abstract sayHi(name: string): string
  abstract fullName(): string
}
class Child extends Parent {
  fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
  sayHi(name: string): string {
    return `Hello ${name}. My name is ${this.fullName()}`
  }
}

interface Parent2{
  firstName: string,
  lastName: string,
  sayHi(name: string): string,
  fullName(): string
}
interface Human {
  health: number
}
class Child2 implements Parent2, Human{
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ){}
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`
  }
}