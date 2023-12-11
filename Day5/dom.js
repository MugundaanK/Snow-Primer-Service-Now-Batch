

// let f = document.getElementById(form);
// const perdetail =[];
// function listener(event){
//    event.preventDefault();

//    const person ={
//        name: "",
//        pass: "",
//        city: "",
//        meth: function(n,p,c){
//            person.name = n;
//            person.pass = p;
//            person.city = c;
//            // console.log(`${this.name}, ${this.pass}, ${this.city}`)
//        }
//    }
//    let n = document.getElementById('uname').value;
//    document.getElementById('uname').value = "";
//    let p = document.getElementById('pass').value;
//    document.getElementById('pass').value = "";
//    let c = document.getElementById('city').value;
//    document.getElementById('city').value = "";
//    person.meth(n,p,c);

// //    newli = document.createElement('<li>');

//    perdetail.push(person);
//    console.log(perdetail);

// }
// form.addEventListener('submit',listener);

// let h = document.getElementById('hello');
// let b = document.getElementById('bye');
// let hi = document.getElementById('hi');
// function listener(){
//     hi.innerHTML="Hello";
// }
// function listener1(){
//     hi.innerHTML="Bye";
// }

// h.addEventListener('click',listener);
// 


// let fun = (name) =>{
//     console.log(name);
// }
// fun("Mugunth");

// let func = function(name){
//     console.log(name);
// }
// func("Mugunth");

// function n(name){
//     console.log(name);
// }
// n("Mugunth");

// // let b = document.getElementById('btn');
// function listener(){
//     let i = document.getElementById('t').value;

//     console.log(i);
// }
// b.addEventListener('click', listener);


let a = [1,2,3,4,5]

a.forEach(function(element,index,a){
    console.log(`${element}, ${index}, ${a}`);
})

for(let data of a){
    console.log(data);
}