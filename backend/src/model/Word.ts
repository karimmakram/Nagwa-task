const {wordList} = require('../data/word.json')

class Word {
    static words:[] = wordList
    id:number
    word:string
    pos:string
    constructor (id:number, word:string, pos:string){
        this.id = id 
        this.word = word
        this.pos = pos
    }

    
    public static getRandom (length:number = 10 ){
        const randomWords :Object[]= []
        const chooser = Word.getOneRandomly(Word.words)
        const selectWord = ['adverb','verb','noun','adjective']

        // ensure array have at least one of each word type and also by random way
        while (selectWord.length) {
            let index = Math.floor(Math.random() * selectWord.length)
            randomWords.push(Word.getSpecileItem(selectWord[index],chooser));
            selectWord.splice(index, 1);
        }
        // fillout rest of array
        for (let index = 0; index < length-4; index++) {
            randomWords.push(chooser())
        }
        return randomWords;
    }

    private static getOneRandomly(list:[]) {
        var copyList = list.slice(0);
        // return callback to use it
        return function(pos:string = '') {
        // if copy empty copy list again for this case we repeat orginal array items
          if (copyList.length < 1) { copyList = list.slice(0); }
          var index = Math.floor(Math.random() * copyList.length);
          var item:Word = copyList[index];
        //  if we pass pos if find item with same pos added else 
        //  if we didn't pass pos return also the item else  return false 
          if(!pos || item.pos == pos) {
            copyList.splice(index, 1);
            return item;
        }
          return false;
        };
      }

    private static getSpecileItem (pos:string, chooseRandom:Function){
        let item = chooseRandom(pos)
        while(!item){
            item = chooseRandom(pos)
        }
        return item
    }
    
}

export default Word;