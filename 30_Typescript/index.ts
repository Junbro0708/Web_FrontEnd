type Age = number;
type Player = {
  readonly name: string,
  age?: Age
}
const playerMaker = (name: string) : Player => ({name})
const jun = playerMaker("Jun")
jun.age = 25

const player: [string, number, boolean] = ["Jay", 12, true]

// void : 아무것도 리턴하지 않는 함수를 만들 때 사용. 리턴 값을 보이드로 따로 지정할 필요는 없음
// never : 함수가 절대 리턴하지 않을 때 사용. 오류를 쓰로우 할 때 주로 사용함.
// unknown : 타입을 미리 알지 못 할 때 사용. 타입 스크립트의 보호를 받을 수 있음. 무조건 타입 체크 해야함

// call signature : 타입을 미리 지정하고 마우스 호버했을 때 타입을 보여줌
type Add = (a: number, b: number) => number
const add: Add = (a, b) => a + b

// 여러 개의 call signature을 가질수도 있음.
type Config = {
  path: string,
  state: object
}
type Push = {
  (path: string): void
  (config: Config): void
}

const push:Push = (config: string | Config) => {
  if(typeof config === "string") {console.log(config)}
  else {console.log(config.path)}
}

type Multiple = {
  (a: number, b: number): number
  (a: number, b: number, c: number): number
}

const multi: Multiple = (a, b, c?:number) => {
  if(c) return a * b * c
  return a * b
}

type SuperPrint = {
  // (arr: number[]): void
  // call signature을 작성할 때, 들어올 확실한 타입을 모를 때 generic을 사용함
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder
}

const superPrint: SuperPrint = (arr) => {
  return arr[0]
}
const a = superPrint([1, 2, 3, 4, 5])
const b = superPrint([true, false, false ])
const c = superPrint([1, 3, 5, "d", false])

// 제네릭을 사용하면 call signature을 직접 작성할 필요가 없음
function myFunction<V>(a: V[]): V{
  return a[0]
}
const d = myFunction([1, 2, 3, 4])
const e = myFunction(["1", "2", "3"])

type User<G> = {
  name: string
  extraInfo: G
}
const nico: User<{favFood: string}> = {
  name: "Nico",
  extraInfo: {
    favFood: "Kimchi"
  }
}
