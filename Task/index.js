//Check Leap Year :

// alert("Leap year Checking");
// let y = parseInt(prompt("Enter the year :"));

// if(y%4 == 0 || y%400 ==0 && y!=100){
//     prompt("It is an leap year");
// }
// else{
//     prompt("It is not an leap year");
// }


// Grade Calculation :

// alert("Grade Calculation");
// let m = parseInt(prompt("Enter ur marks :"));

// if(m >= 90){
//     prompt("Grade A");
// }
// else if(m < 90 && m >= 80){
//     prompt("Grade B");
// }
// else if(m < 80 && m >= 70){
//     prompt("Grade C");
// }
// else if(m < 70 && m >= 60){
//     prompt("Grade D");
// }
// else{
//     prompt("Grade F");
// }

//Number Guessing Game :

// alert("Guessing number Game");
// let un = parseInt(prompt("Enter ur guessed number"));
// const rn = Math.floor(Math.random()* 100) + 1;

// console.log(rn);
// while(true){

//     if(un == rn){
//         alert("Correct Congratulation!!!");
//         break;
//     }
//     else if(un > rn){
//         alert(" Oops! try lower number");
//         un = parseInt(prompt("Enter ur guessed number"));
//     }
//     else{
//         alert("Oops! try higher number");
//         un = parseInt(prompt("Enter ur guessed number"));
//     }
// }

//Student information management :

// alert("Student Information Management");
// var name = prompt("Enter Student's name:");
// var age = parseInt(prompt("Enter Student's age:"));
// var grade = prompt("Enter Student's grade:");

// let ob = {
//     name:name,
//     age:age,
//     grade:grade,
    
//     meth: function(){
//         alert(`Student details: \n\nname: ${this.name} \nage: ${this.age} \ngrade: ${this.grade}`);
//     }
// };

// ob.meth();

// let arr =["apple","banana","orange","grape"];
// arr.forEach(function (elements,index,){
//     console.log(`${index}, ${elements}`);
// });


// let n = [1,2,3,4,5];
// let s = n.reduce((re,c) => re+c);
// console.log(s);

console.log(a);
let a = 10;
console.log(a);