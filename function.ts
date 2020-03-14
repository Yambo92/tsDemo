function add(n1:number, n2:number) {
    return n1 + n2
}

function printResults(num:number):void {
    console.log('result: ' + num)
}
console.log(printResults(add(5,12)))

let combineValues: (a:number, b:number) => number;

combineValues = add;
// combineValues = printResults

console.log(combineValues(9,9))

function addAndHandle(n1:number, n2:number, cb:(num: number) => void) {
    const result = n1 + n2;
    cb(result)
}
addAndHandle(10, 20, (result) => {
    console.log(result)
})