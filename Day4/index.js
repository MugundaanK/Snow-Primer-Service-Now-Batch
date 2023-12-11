// let name = prompt("Enter ur name");
// let o = {
//     name : name,

//     f : function(){
//         console.log(`name: ${this.name}`);
//     }
// }
// o.f();

// function f(...number){
//     console.log("the array elements :"+number);
// }

// f(1,2,3);
// f(1,2,);
// f(1,2,3,4,5);

//reduce:

// let a = [1,2,3,4,5,6,7];
// let s = a.reduce((a,c) => a+c);
// console.log(s);

//map:

// let a = [1,2,3,4,5];

// let t = a.map((a) => a*3);

// console.log(t); 

// filter:

// let arr=[1,2,3,4,5,6,7,8,9,10];

// let en = arr.filter((num,element,arr) =>{
//     return num%2 == 0;
// });

// console.log(en);


// class:
// class person{
//     constructor(name,age,grade){
//         this.name = name;
//         this.age=age;
//         this.grade=grade;
//     }
// }
// let p2 = new person("Mugunth",22,"A");
// console.log(p2);

// // Abstraction:
// class person{
//     constructor(name,age,grade){
//         this.name = name;
//         this.age=age;
//         this.grade=grade;
//     }
//     getName(){ // abstraction 
//         return this.name;
//     }
//     getAge(){
//         return this.age;
//     }
//     getgrade(){
//         return this.grade;
//     }
// }
// let p1 = new person("Mugunth",22,"A");
// console.log(p1.getName());
// console.log(p1.getAge());
// console.log(p1.getgrade());

// Inheritance:

// class Animals{
//     speak(){
//         console.log("Animals make different sounds");
//     }
// }
// class Dog extends Animals{
//     constructor(name){
//         super(); // must be used in child class
//         this.name=name;
//     }
    
// }
// let d1 = new Dog("Doggy");
// console.log(d1.speak());

// polymorphism: Method overridding
// class Animals{
//     speak(){
//         console.log("Animals make different sounds");
//     }
// }
// class Dog extends Animals{
//     constructor(name){
//         super(); // must be used in child class
//         this.name=name;
//         console.log(this.name);
//     }
//     speak(){
//         console.log("dog barks");
//     }
    
// }
// let d1 = new Dog("Doggy");
// d1.speak();


// Task:

// class student{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     getName(){
//         return this.name;
//     }
// }
// let s = [
//     {name : "Mugunth",age : 10},
//     {name :"Madhav", age :15},
//     {name: "Madhav", age:20},
//     {name: "Gowsick", age:25}, 
//     {name: "HArish", age: 30}
// ];

// let eligible = s.filter((s) => s.age>=20);
// console.log(eligible);

//Closure:

// function f1(){
//     a=10;
//     function f2(){
//         console.log(a);
//     }
//     f2();
// }
// f1();

function sum(...numbers){
    for(let data of numbers){
        total += data;
    }
}
console.log(sum(1,2,3,4,5));