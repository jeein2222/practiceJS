//Operator
//1)String concatenation 문자열 연결
console.log('my'+'cat');
console.log('1'+2);
console.log(`string linerals: 1+2=${1+2}`);

//2)Numeric operators
console.log(1+1); //add
console.log(1-1); //substract
console.log(1/1); //divide
console.log(1*1); //multiply
console.log(5%2); //remainder
console.log(2**3); //exponentiation

//3)Increment and decrement operators
let counter=2;
const preIncrement=++counter;
console.log(preIncrement);//3
const postIncrement=counter++;
console.log(postIncrement);//3

//4)Assignment operators
let x=3;
let y=6;
x+=y;
x-=y;
x*=y;
x/=y;

//5)Comparison operators
console.log(10<6);
console.log(10<=6);
console.log(10>6);
console.log(10>=6);

//6)Logical operators : ||(or), &&(and), !(not)
const v1=true;
const v2=4<2;
//|| true가 나타나면 거기서 멈춤
console.log(`or: ${v1||v2||check()}`);//check 실행 안됨
//&& false가 나타나면 거기서 멈춤
console.log(`and: ${v1&&v2&&check()}`);//check 실행 안됨

function check(){
    for(let i=0;i<3;i++){
        console.log('hi');
    }
    return true;
}

console.log(!v1);//false

//7)Equality
const stringFive='5';
const numberFive=5;

//== : loose equality, with type conversion
console.log(stringFive==numberFive);//true
console.log(stringFive!=numberFive);//false

//=== : strict equality, no type conversion
console.log(stringFive===numberFive);//false
console.log(stringFive!==numberFive);//true

//8)object equality by reference
const je1={name:"e"};
const je2={name:"e"};
const je3=je1;

console.log(je1==je2); //false
console.log(je1===je2); //false
console.log(je1===je3); //true
console.log(je1==je3); //true

//+
console.log(0 == false); //true
console.log(0 === false); //false
console.log(''==false); //true
console.log(''===false); //false
console.log(null == false); //false
console.log(null === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false

//9)Conditional operators : if else
const name ='ellie';
if(name === 'ellie'){
    console.log('Welcome, Ellie');
} else if(name === 'coder'){
    console.log('You are amazing coder');
} else{
    console.log('unknown');
}

//10)Ternary operator : ?
//condition ? value1:value2
const myname='ellie';
console.log(myname === 'ellie' ? 'yes':'no');//yes

//11)Swtich Statement
/*
    Use for multiple if checks
            enum-like value checks
            multiple type checks in TS
*/
const browser='IE';
switch(browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all!');
        break;
}

//12)Loops 

//while loop:while the condition is truthy, body code is executed.
let i=3;
while(i>0){
    console.log(`while: ${i}`);
    i--;
}

//do while loop:body code is executed first, then check the condition
let a=4;
do{
    console.log(`do while: ${a}`);
    a--;
}while(a>0);

//for loop
for(i=3;i>0;i--){
    console.log(`for: ${i}`);
}
for(let i=3;i>0;i=i-2){
    console.log(`inline variable for: ${i}`);
}

//nested loops
for(let i=0;i<5;i++){
    for(let j=0;j<5;j++){
        console.log(`i:${i}, j:${j}`);
    }
}

for(let i=0;i<10;i++){
    if(i%2!=0) continue;
    console.log(i);
}

let b=0;
do{
    if(b<=8) console.log(b);
    else break;
    b++;
}while(b<=10);