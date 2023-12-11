// // let p = document.getElementById('para');

// // function listener(){
// //     p.innerHTML = "I am Mugundaan";
// // }

// // p.addEventListener('click',listener);

// let a = [1,2,3,4,5,6];
// var total= 0; 
// function sum(...numbers){
//     for(let num of numbers){
//         total += num;
//     }
//     return(total);
// }

// const updateMyVehicle = {
//     type: 'car',
//     year: 2021, 
//     color: 'yellow',
//     model: 'cheverlote'
//   }
// const myVehicle = {
//     brand: 'Ford',
//     model: 'Mustang',
//     color: 'red'
// }
// const myv = {...myVehicle, ...updateMyVehicle};
// console.log(myv);



// let a = [1,2,3,4,5]

// // a.forEach(function(i){
// //     console.log(` ${i}`);
// // })

// for(let data of a){
//     console.log(data);
// }

// const para = document.createElement("p");
// para.innerHTML = "Welcome Mugundaan !!!";
// let u = ["Mugunth","Karthik","Gowsick"];
// const ul = document.createElement("ul");
// for(user of u){
//     ul.innerHTML += `<li type="circle"><b> ${user} </b></li>`;
// }
// document.getElementById("div1").appendChild(para);
// document.getElementById("div1").appendChild(ul);


let a = [1,2,3,4,5,6];

let r = a.reduce((a,c) =>
    a + c );

console.log(r);


let ar = [1,2,3,4,5];
let mul = ar.map((ar) => ar*3 );
console.log(mul);

let arr = [1,2,3,4,5,6,7,8,9,10];
let en = arr.filter((num,index,arr) => {
    return (num%2 != 0);
})
console.log(en);



// num = [1,2,3,4,5];

// console.log(sum(1,2,3,4,5));

// console.log(sum(1,2,3,));

// console.log(sum(1,2,3,4,5,6,7,8));

// let a = ["Hello","Mugunth"];
// function greet(greet,name){
//     console.log(`greet: ${greet}, name: ${name}`);
// }
// greet(...a);
// const ul = document.getElementById('ul');



// sum(1,2,3,4,5)

// let n1 = [1,2,3,4];
// let n2 = [5,6,7];

// const comb = [...n1, ...n2];
// // const comb= [n1,n2];
// console.log(n1);
// console.log(n2);
// console.log(comb);


// 1.2. Create 4 divs with size 100x100px with bg-color:red;
// - When I click on 1st div change the bg-color.
// - When the mouse comes in the second div area change the bg-color.
// - When user clicks on 3rd div add an image in the backgroud.
// - When the user clicks on 4th div change the size of div.

// Create a div with "demo text" inside it now when I click on that div the text should get chaged to "I got clicked" 
// and chagen the backgroud color of that div to pink.

// 3. Create a p tag inside it initially shwo 0. Then create 2 buttons to increment or decreament it by 1.


// let d1 = document.getElementById('div1');
// let d2 = document.getElementById('div2');
// let d3 = document.getElementById('body');
// let d4 = document.getElementById('div4');
// const myButton = document.getElementById("mybutton");
// // function onclick(){
// //     d1.style.backgroundColor="blue";
// //     console.log('div1 done');
// // }
// // function onhover(){
// //     d2.style.backgroundColor="green";
// //     console.log('div2 done');
// // }
// // function imgchange() {
// //     d3.style.backgroundImage="url(../loki2.jpg)";
// //     console.log('div3 done');
// // }
// // function divchange(){
// //     d4.style.width = "200px";
// //     d4.style.height = "200p"
// //     d4.innerHTML="I got clicked.";
// //     d4.style.backgroundColor='pink';
// // }

// // d1.addEventListener('click',onclick);
// // d2.addEventListener('mouseover',onhover);
// // d3.addEventListener('click',imgchange);
// // d4.addEventListener('click',divchange);

// function parent(){

//     console.log("parent is clicked");
    
// }
// function children(){
//     console.log("Child is clicked");
// }
// function body(){
//     console.log('body is clicked');
// }
// d1.addEventListener('click',parent);
// d2.addEventListener('click',children);
// d3.addEventListener('click',body);


// let duparr = [1,1,2,5,3,3,3,4,5,6,6,5,7,8,8,9];
// let uniqarr = [...new Set(duparr)];
// console.log(uniqarr);
// console.log(duparr);


// const d1 = document.getElementById('mydiv');
// function color(){
//     d1.innerHTML="Hello Mugundaan";
//     d1.style.color= "green";
// }
// d1.addEventListener('click',color);


// let prom = new Promise((resolve, reject) => {
//     console.log("Please wait...");

//     setTimeout(() =>{
//         if(2>=1){
//             resolve("Success");
//         }
//         else{
//             reject("Failed");
//         }
//     },4000);
// });

// prom.then((result) => {
//     console.log(result);
// })
// .catch((result) => {
//     console.log(result);
// })


class student{
    constructor(name,age,grade){
        this.name=name;
        this.age=age,
        this.grade=grade;
    }
}
const p = new student("Mugunth",22,"A");
console.log(p);


console.log(document);

console.log(document.body.children);