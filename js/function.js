//Function
/* 
    - Fundamental building block in the program
    - subprogram can be used multiple time
    - performs a task or calculates a value

*/
//1.Function declaration
/* 
    function name(param1, param2 ...){body ... returns;}
    one function === one thing
    naming:doSomething, command, verb
    function is object in JS
*/
function printHello(){
    console.log("hello");
}
printHello();

function log(message){
    console.log(message);
}
log("hello");
//TypeScript의 함수의 인터페이스만 봐도 정확하게 무엇을 리턴하고, 파라미터와 그의 데이터 타입을 알 수 있다.

//2.Parameter
//primitive parameter : passed by value
//object parameter : passed by reference
function changeName(obj){
    obj.name='coder';
}
const ellie={name:'ellie'};
changeName(ellie);
console.log(ellie.name);

//3.Default Parameter
function showMessage(message, from='unknown'){
    console.log(`${message} by ${from}`);
}
showMessage("hello");

//4.Rest parameters(added in ES6)
function printAll(...args){
    for(let i=0;i<args.length;i++){
        console.log(args[i]);
    }
    for(const arg of args){
        console.log(arg);
    };
    args.forEach(arg => {
        console.log(arg);
    });
};
printAll('banana','apple');

//5.Local scope
let globalName="global";
function printMessage(){
    let message="hello";
    console.log(message);
    console.log(globalName);
    function printAnother(){
        console.log(message);
        let childMessage="hello";
    }
    // console.log(childMessage);->Uncaught ReferenceError
    printAnother();
}
printMessage();
//printAnother();->Uncaught ReferenceError

//6.Return a value(return 값이 없는 함수는 return undefined가 생략된 것)
function sum(a,b){
    return a+b;
}

const result=sum(1,2);
console.log(`sum: ${sum(1,2)}`);

//7.Early return, early exit
//bad
function upgradeUser(user){
    if(user.point>10){
        //long upgrade logic...
    }
}

//good
function upgradeUser(user){
    if(user.point<=10){
        return;
    }
    //long upgrade logic...
}

//First-class Function
/* 
    - functions are treated like any other variable
    - can be assigned as a value to variable
    - can be passes as an argument to other functions
    - can be returned by another function
*/
//1.Function expression
/* 
    - function delcaration can be called earlier than it is defined.(hoisted)
    - function expression is created when the execution reaches it.
*/

// print(); function.js:109 Uncaught ReferenceError: Cannot access 'print' before initialization
const print=function(){//function expression(hoisting X)
    console.log('print');
}
print();

const printAgain=print;
printAgain();//can be assigned as a value to variable

sayHello();//hoisting 
function sayHello(){//function decalration(hoisting O)
    console.log('hello');
}
sayHello();

//2.Callback function using function expression
function randomQuiz(answer,printYes,printNo){
    if(answer==='ok'){
        printYes();//can be returned by another function
    }else{
        printNo();
    }
}
randomQuiz("ok",printYes,printNo);//can be passes as an argument to other functions
randomQuiz("no",printYes,printNo);//no


function printYes(){
    console.log("yes");
}


function printNo(){
    console.log("no");
}

//3.Arrow function -> always anonymous
const simplePrint = () => {console.log('hello');}
const add = (a,b) => a+b;
const multiply = (a,b) => {return a*b;} //괄호에는 return 필요
simplePrint();
console.log(add(2,3));
console.log(multiply(2,3));

//IIFE:Immediately Invoked Function Expression
(function Hello(){
    console.log("hello");
})();