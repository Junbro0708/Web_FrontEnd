type Words = {
  // 프로퍼티가 문자열만 허용된다는 뜻
  [key:string]: string
}

class Dict {
  // 수동으로 초기화
  private words: Words
  constructor(){
    this.words = {}
  }
  add(word: Word){
    if(this.words[word.term] === undefined){
      this.words[word.term] = word.def
    }
  }
  getDefinition(term: string){
    if(this.words[term]){
      console.log(this.words[term])
    }else{
      console.log("Not Found")
    }
  }
  static hello(){
    return "Hello"
  }
}

class Word {
  constructor(
    public readonly term: string,
    public readonly def: string
  ) {}
}

const kimchi = new Word("kimchi", "Korean food")

const dict = new Dict()
dict.add(kimchi)
dict.getDefinition("kimchi");
dict.getDefinition("kimci");