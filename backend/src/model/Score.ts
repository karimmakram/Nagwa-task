const {scoresList} = require('../data/score.json')

class Score {
    static scores:[] = scoresList
    constructor (){
    }

    public static getRank(score:number) {
        let count = 0;
        for (let index = 0; index < this.scores.length; index++) {
            if (score > this.scores[index]) {
                count++
            }
        }
        return ((count/this.scores.length)*100).toFixed(2)
    }
    
    public getAll(){
        return Score.scores;
    }
}

export default Score;