// const f = document.getElementById("blog");
// const submit = document.getElementById("Submit");
// const post = document.getElementById("display");
// const arr = [];

// function blogdetail(event){
//     event.preventDefault();
//     let title = document.getElementById("title").value;
//     console.log(title);
//     let author = document.getElementById("author").value;
//     let category = document.getElementById("category").value;
//     let content = document.getElementById("content").value;

//     let bd = {
//         title : title,
//         author : author,
//         category: category,
//         content:content
//     }
//     arr.push(bd);


//     post.innerText="";

//     for(let i of arr){

//         let h3 = document.createElement('h3');
//         let h5 = document.createElement('h5');
//         let p = document.createElement('p');
//         let para = document.createElement('p');


//         h3.innerText = i.title;
//         h5.innerText = i.author;
//         p.innerText = i.category;
//         para.innerText = i.content;
        
//         post.appendChild(h3);
//         post.appendChild(h5);
//         post.appendChild(p);
//         post.appendChild(para);
       
//     }
// }

// submit.addEventListener("click",blogdetail);


// const y = parseInt(document.getElementById("year"));
// const b = document.getElementById("check");

// function leapornot(){
//     event.preventDefault();
//     let h = document.createElement('h3');
//     const disp = document.getElementById("disp");
//     if ((y%4 == 0) || (y%400 == 0) || (y%100 != 0)){
//         h.innerHTML = "Entered year is a leap year";
//         disp.appendChild(h)
//     }
//     else{
//         h.innerHTML = "Entered year is not a leap year";
//         disp.appendChild(h);
//     }
    
// }
// disp.innerHTML="";
// b.addEventListener("click", leapornot);

// alert("Leap year Checking");
// let y = parseInt(prompt("Enter the year :"));

// if(y%4 == 0 || y%400 ==0 || y%100 == 0){
//     alert("It is an leap year");
// }
// else{
//     alert("It is not an leap year");
// }

// let str = "I am enjoying my training";
// console.log(str.indexOf("my"));


// let rock = document.getElementById("rock").value;
// let paper = document.getElementById("paper").value;
// let scissor = document.getElementById("scissor").value;


let pscore = document.getElementById("pscore");
let cscore = document.getElementById("cscore");
let acount = document.getElementById("acount");
let body = document.getElementById("body");

let pcount = document.getElementById("pcount");
let ccount = document.getElementById("ccount");


let countp = 0;
let countc = 0;
let count = 0;
let comchoice = ['rock','paper','scissor'];


function randnum(){
    return Math.floor(Math.random()*3);
}

let display = document.getElementById("result");
let h = document.createElement('h4');
let p = document.createElement('p');
   

function game(option){
    event.preventDefault();
    if(count < 5){
        let player = comchoice.indexOf(option);
        let computer = randnum();
        console.log(comchoice[computer]);
        if((player == computer)){
            h.innerHTML = " It Is a Tie";
            h.style.color = "red";
            display.appendChild(h);
        }
        else if((player == 0 && computer ==2)||(player == 1 && computer == 0)||(player == 2 && computer == 1)){
            h.innerHTML = " You Won Congratulatoins !!!";
            h.style.color = "blue";
            display.appendChild(h);
            countp++
            pcount.innerHTML=countp;
        }
        else{
            h.innerHTML = "Oops !!! You Loss";
            h.style.color = "red";
            display.appendChild(h);
            countc++
            ccount.innerHTML=countc;
        }
        count++;
        acount.innerHTML = count;
        // acount.appendChild(p);
    }
    else{
        body.innerHTML="";
        h.innerHTML = "Game Over";
        h.style.color = "white";
        h.style.textAlign = "center";
        h.style.fontSize = "100px";
        h.style.marginTop = "330px";
        body.appendChild(h);


        if(countp == countc){
            setTimeout(()=>{
            body.innerHTML="";
            body.style.backgroundColor="white";
            h.innerHTML = "It's a Tie Game";
            h.style.color = "yellow";
            h.style.textAlign = "center";
            h.style.fontSize = "100px";
            h.style.marginTop = "330px";
            body.appendChild(h);
            },2000);
        }
        else if(countp > countc){
            setTimeout(()=>{
            body.innerHTML="";
            body.style.backgroundColor="white";
            h.innerHTML = "! Congrats You Won The Game !";
            h.style.color = "green";
            h.style.textAlign = "center";
            h.style.fontSize = "100px";
            h.style.marginTop = "330px";
            body.appendChild(h);
            },2000);
        }
        else{
            setTimeout(()=>{
                body.innerHTML="";
                body.style.backgroundColor="white";
                h.innerHTML = "! Oops You Lose The Game !";
                h.style.color = "red";
                h.style.textAlign = "center";
                h.style.fontSize = "100px";
                h.style.marginTop = "330px";
                body.appendChild(h);
            },2000);
        }
    }
}
