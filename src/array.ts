import axios from 'axios'
export {};

let numbers: number[] = [1,2,3];
console.log(numbers);

let strings: string[] = ["A", "B", "C"];
console.log(strings)

let niji: number[][] = [
    [50, 100],
    [150, 300]
]
console.log(niji)

let aaa: (string|number|boolean)[] = [1, false, "Japan"];

console.log(aaa)

let profile: [string, number] = ['Ham', 43];
// profile = [43, 'Ham'];

let url: string = "udemy-utils.herokuapp.com/api/v1/articles?token=token123"

axios.get(url).then(function(response){
    console.log(response.data);
})



