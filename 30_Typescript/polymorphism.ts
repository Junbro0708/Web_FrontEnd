interface SStorage<T> {
  [key:string]: T
}

class LocalStorage<T> {
  private storage: SStorage<T> = {}
  set(key:string, value:T){
    this.storage[key] = value;
  }
  remove(key:string){
    delete this.storage[key]
  }
  get(key:string):T{
    return this.storage[key]
  }
  clear(){
    this.storage = {}
  }
}

const stringsStorage = new LocalStorage<string>()
const booleanStorage = new LocalStorage<boolean>()

stringsStorage.set("kimchi", "delicious")
booleanStorage.set("genious", true)

console.log(stringsStorage.get("kimchi"))
console.log(booleanStorage.get("genious"))
