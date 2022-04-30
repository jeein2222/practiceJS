//1.Variable(Mutable):메모리를 가리키는 포인터가 변경가능하다(Read and Write)
//global scope variable
let globalName="global name";
{
    //block scope variable
    let name ="ellie";
    console.log(name);
    name="hello";
    console.log(name);
}
console.log(name);//접근 불가
console.log(globalName); //접근 가능

// var hoisting : 어디에 선언했느냐에 상관없이 항상 제일 위로 선언을 끌어올려줌.
// var은 선언하기 전에 값을 할당할 수 있고, block scope 이 없다.

//2.Constant(Immutable):메모리의 포인터가 잠겨있다.값 변경 불가(Read)
/*
    favor immutable data type always for a few reasons.
        -security
        -thread safety
        -reduce human mistakes
*/

const a ="hello";
console.log(a);
// a="hello2";
// console.log(a);

//3.Data Types
/*
    primitive, single item : number, string, boolean, null, undefined -> 값 자체가 메모리에 저장됨
    object, box container(single item을 묶어서 관리) : 레퍼런스를 통해서 실제로 오브젝트가 담겨있는 메모리를 가리킴.
    function, first-class function 지원 : 함수도 다른 데이터 타입처럼 함수에 할당 가능, 인자로도 전달되고, 리턴도 됨.

    Immutable data types : primitive types, frozen objects(i.e. object.freeze())
    Mutable data types : all objects by default are mutable in JS
*/

//primitive data types : number, string, boolean, null, undefined
//1)number
const infinity=1/0;
const negativeInfinity=-1/0;
const nAn="not a number"/2;
console.log(infinity); //Infinity
console.log(negativeInfinity);//-Infinity
console.log(nAn);//NaN

//2)string
const char='c';
const brendan="brendan";
const greeting="hello "+brendan;
console.log(`value: ${greeting}, type:${typeof greeting}`); //value: hellobrendan, type:string
const helloBob=`hi ${brendan}`;
console.log(`value: ${helloBob}`);//template literals

//3)boolean
const canRead=true;
const test=3<1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);
//false : 0, null, undefined, NaN, ''
//true  : any other value

//4)null undefined
let nothing=null;
console.log(`valu: ${nothing}, type: ${typeof nothing}`);
//value: null, type: object
let x;
console.log(`value: ${x}, type: ${typeof x}`);
// value: undefined, type: undefined

//5)symbol, create unique identifiers for objects
/*
    Map이나 다른 자료구조에서 고유한 식별자가 필요하거나 동시에 다발적으로 
    일어날 수 있는 코드에서 우선순위를 주기 위해. 식별자를 string을 이용해서 쓰는 경우가 있는데,
    이 string을 다른 모듈이나 다른 파일에서 동일한 string을 썼을 때 동일한 식별자로
    간주됨. 하지만, 반대로 symbol이 같은 경우 동일한 id를 이용해서 만들어도 다르다.
*/
const symbol1=Symbol('id');
const symbol2=Symbol('id');
console.log(symbol1===symbol2);//false

const gSymbol1=Symbol.for('id');
const gSymbol2=Symbol.for('id');
console.log(gSymbol1===gSymbol2);//true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
//value: id, type: symbol

//Object:real-life object, data structure
//Object
const ellie={
    name:"ellie",
    age:20
};
console.log(ellie);
ellie.name="hello";
console.log(ellie);//변경됨.

//Dynamic typing : dynamically typed language
/*
    C나 JAVA 는 statically typed language로 변수 선언시 타입 선언이 필요.
    그러나 Javascript는 dynamically typed language로 runtime에 할당된 값에 따라 데이터 타입이 정해진다.
*/

let text='hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text=1;
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0));->타입 변경되어 TypeError오류 발생
//이러한 Dynamic Typing 때문에 TypeScript가 나오게됨.
//TypeScript는 브라우저가 이해할 수 있는 JS로 바꿔주는 transcompiler를 이용해야 됨.


