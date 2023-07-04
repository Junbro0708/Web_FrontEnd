abstract class Person{
  constructor(
    private firstName: string,
    private lastName: string,
    protected nickName: string
  ) {}
  abstract getNickName():void
  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
}

class Student extends Person{
  getNickName(): void {
    console.log(this.nickName)
  }
}

const taka = new Student("taka", "ota", "TK");
console.log(taka.getFullName())
taka.getNickName();