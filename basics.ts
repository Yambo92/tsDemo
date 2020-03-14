function add(n1:number, n2:number, showResult:boolean,rsultPhrase:string) {
    const result = n1 + n2
    if(showResult){
        console.log(rsultPhrase + result)
    }else{
        return result
    }
    
}
let number0: number;
const number1 = 5;
const number2 = 3.3;
const printResult = true;
const rsultPhrase = "Result is:"
number0 = 0
add(number1, number2, printResult,rsultPhrase)
