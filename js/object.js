//Object
/* 
    - one of the JavaScript's data types
    - a collection of related data and/or functionality
    - Nearly all objects in JavaScript are instances of Object
*/
//1.Literals and properties 
//object = {key : value}
const ellie={name:'ellie', age:4}; //'object literal' syntax
// const jeein=new Person(); //'object constructor' syntax

ellie.hasJob=true; // 뒤늦게 property add 가능
delete ellie.hasJob; // delete도 가능

//2.Computed properties
//key should be string type!
console.log(ellie.name); //dot
console.log(ellie['name']); //list 형태로
ellie['hasJob']=true;
console.log(ellie.hasJob);//true

function printValue(obj, key){//동적으로 key에 대한 value를 받아와야 할때
    console.log(obj[key]);
}
printValue(ellie,'name');//ellie

//3.Property value shorthand & Constructor function
const person1={name:'bob',age:2};
const person2={name:'steve',age:12};
const person3=new Person('ellie',20);

function Person(name,age){//생성자 함수
    this.name=name;
    this.age=age;
}

//4.in operator : property existence check(key in obj)
console.log('name' in person3);//true
console.log('age' in person2);//true

//5.for ... in vs for ... of
console.clear();
for(key in person3){
    console.log(key); //name, age
}

const array=[1,2,3,4];
for(value of array){
    console.log(value);// 1 2 3 4
}

//6.Fun cloning
//Object.assign(dest,[obj1,obj2,obj3...])
const user={name:'ellie',age:'20'};
const user2=user;
user2.name='coder';
console.log(user);//{name: 'coder', age: '20'}

//How can We Clone..?
//1) old way
const user3={}
for(key in user){
    user3[key]=user[key];
}
console.log(user3);

//2)Object.assign()
const user4=Object.assign({},user);
console.log(user);

const fruit1={color:'red'};
const fruit2={color:'blue',size:'big'};
const mixed=Object.assign({},fruit1,fruit2);
console.log(mixed.color);//blue
console.log(mixed.size);//big

