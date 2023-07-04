type Team = "red" | "blue" | "yellow"
interface People {
  nickname: string,
  healthBar: 1 | 5 | 10
  team: Team
}
const tiko: People = {
  nickname: "tiko",
  healthBar: 5,
  team: "red"
}

type Food = string

const pa:Food = "spicy"

// 타입은 모든 것을 정할 수 있음. 인터페이스 기능의 상위호환 느낌.
// 인터페이스는 오로지 오브젝트의 모양을 특정해주기 위함. 클래스와 비슷해서 쓰기 편함

interface Gamer{
  name: string
}
interface Gamer{ // 이름이 같은 인터페이스가 있다면 그 둘을 합쳐줌
  age: number
}
interface FPSGamer extends Gamer{

}

const celo: FPSGamer = {
  name: "celo",
  age: 25
}