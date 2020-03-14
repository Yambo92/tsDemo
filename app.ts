
let userInput:unknown;

userInput = 5;
userInput = 'Max'
let userName: string
if(typeof userInput === 'string'){
    userName = userInput
}

function generateError(message:string, code:number):never {
    throw {message: message, errorCode: code};
    
}
generateError('An Error occured!', 500)