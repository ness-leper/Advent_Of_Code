(()=>{
    const fs = require('fs');

    //  Rock / Paper / Scissors Values
    // {
    //     A: 1, // rock
    //     B: 2, // paper
    //     C: 3, //scissors
    // };

    // Stolen strategy guide. 
    const data = fs.readFileSync('daytwo.txt','utf8')
        .split('\n')
        .map( item => {return item.split(' ')})

    // Assume X, Y, Z is your counter position
    // Value of Win, Lose, Draw + value of position
    const scores_part_1 = {
        "A": {"X": 4,"Y": 8,"Z": 3},
        "B": {"X": 1,"Y": 5,"Z": 9},
        "C": {"X": 7,"Y": 2,"Z": 6}
    }
    
    const part_one = data.reduce( (acc, game) => {
        return acc+=scores_part_1[game[0]][game[1]];
    },0);
    console.log(part_one);

    // Oppenent plays first, second is your move
    // X => Lose, Y => Draw, Z => Win + value of position
    const round_two = {
        "A": { "X": 3, "Y": 4, "Z": 8, },
        "B": { "X": 1, "Y": 5,"Z": 9,},
        "C": { "X": 2,"Y": 6,"Z": 7}
    }

    const part_two = data.reduce( (acc, game) => {
        return acc+=round_two[game[0]][game[1]];
    },0);
    console.log(part_two);

})();