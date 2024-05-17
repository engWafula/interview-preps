class Dictionary{
    constructor(words){
        this.dict = words
    }

    isInDict(word){
      return   this.dict.includes(word)
    }
}

const d = new Dictionary(["open","earth","foundation"])
console.log(d.isInDict("earthr"))
console.log(d.isInDict("earth"))