(()=>{
    const fs = require('fs');

    const getPriority = (itemStr: string) => {
        return (
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(itemStr) + 1
        );
      };

    const data = fs.readFileSync('daythree.txt','utf8')
        .split('\n');

    console.log(data.reduce( (acc:number, line:string) => {
        let left = line.slice(0,line.length/2);
        let right = line.slice(line.length/2,line.length);
        for (let pos = 0; pos < left.length; pos++){
            if(right.includes(left[pos])) return acc+=getPriority(left[pos]);
        }
    },0));

})();