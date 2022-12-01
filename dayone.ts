(()=>{
    const fs = require('fs');

    // each line is the number of calories carried
    // each block is a single elf (blocks are seperated by a blank line)
    // summarize total calories carried by each block
    const data = fs.readFileSync("input.txt","utf8")
        .split("\n\n")
        .map(item => { return item.split("\n") })
        .map(item => { return item.reduce( (acc, val) => {return acc+=val*1},0)})
        .sort( (a,b) => b-a);

    // what block has the highest calorie count
    console.log(`The most calories are: ${data[0]}`);

    // what is the summary of the top 3 blocks
    console.log(`The Top 3 block count is: ${data[0] + data[1] + data[2]}`);

})();