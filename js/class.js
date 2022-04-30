//Object-oriented programming
/* 
    - class : template 찍어내는 틀
    - object : instance of a class 클래스로 찍어낸 것
    Javascript classes :
        - introduced in ES6
        - syntactical sugar over prototype-based inheritance
*/
//1.Class declarations
class Person{
    //constructor
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    speak(){
        console.log(`${this.name}, hello!`)
    }
}

const ellie=new Person("ellie",20);
console.log(ellie);
ellie.speak();

//2.Getter and Setter
class User{
    constructor(firstName, lastName, age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    get age(){
        return this._age;
    }
    set age(value){
        this._age=value<0 ? 0:value;
    }
}

const user1=new User('Steve','Job',-1); //클래스를 사용하는 사용자가 아무값이나 넣지 않도록 get,set 정의
console.log(user1);

//3.Field(public, private)
//Too soon!
class Experient{
    publicField=2;
    #privateField=0;//class 내부에서만 접근 가능
}
const experient=new Experient();
console.log(experient.publicField);//2
console.log(experient.privateField);//undefined

//4.Static properites and methods
//Too soon!
class Article{
    static publisher='Dream Coding';
    constructor(ariticleNumber){
        this.ariticleNumber=ariticleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}
const article1=new Article(1);
const article2=new Article(2);
console.log(Article.publisher);//Dream Coding
Article.printPublisher();//object와 상관없이 공통적으로...

//5.Inheritance 상속
//a way for one class to extend another class
//overriding : 객체의 상속받은 부모메소드를 재정의
class Shape{
    constructor(width, height, color){
        this.width=width;
        this.height=height;
        this.color=color;
    }
    draw(){
        console.log(`drawing ${this.color} color`);
    }
    getArea(){
        return this.width*this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        super.draw();
        console.log('Shape :🔺');
    }
    getArea(){//overriding
        return this.width*this.height/2;
    }
}

const rectangle=new Rectangle(10,10,'blue');
const triangle=new Triangle(10,10,'red');
rectangle.draw();
console.log(`🟦 's area :${rectangle.getArea()}`);
triangle.draw();
console.log(`🔺's area : ${triangle.getArea()}`);

//6.Class Checking : instanceof
console.log(rectangle instanceof Rectangle);//true
console.log(triangle instanceof Rectangle);//false
console.log(triangle instanceof Triangle);//true
console.log(triangle instanceof Shape);//true
console.log(triangle instanceof Object);//true



