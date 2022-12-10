
const IsInside = (left:any, right:any):boolean => {
    return left[0] <= right[0] && left[1] >= right[1] ? true : false;
}

const IsWrapped = (left:any, right:any):boolean => {
    return left[0] >= right[0] && left[0] <= right[1] ? true : false;
}

(()=>{

    // Each line has two ranges of number of numbers.
    // Tally how many lines have 1 range encompassing the other range

    const fs = require('fs');
    // load the data and split up in to array
    const data:any = fs.readFileSync('day4.txt','utf8')
        .split('\n')
        .map( (item:string) => {
            return item.split(',').map( (value:string) =>{
                return value.split('-').map( (point:string) => {return parseInt(point)});
            });
        });
    
    // Find which side is bigger?
    // See if the smaller side is inside the bigger side?    
    let p1tally:number = 0; // tally for part 1

    // Part 2: tally any that are overlapping (e.g. 2-5 and 4-9 overlap)
    let p2tally:number = 0;
    for(let loc = 0; loc < data.length; loc++){
        const left:any = data[loc][0];
        const right:any = data[loc][1];
        let encapsulated:boolean = IsInside(left, right);
        let wrapped:boolean = IsWrapped(left,right);
        if(!encapsulated)
            encapsulated = IsInside(right,left);
        if(!wrapped)
            wrapped = IsWrapped(right,left);

        p1tally = encapsulated ? p1tally+1 : p1tally;
        p2tally = wrapped ? p2tally+1 : p2tally;        
    }

    console.log({
        'Part 1': p1tally,
        'Part 2': p2tally
    })
})();