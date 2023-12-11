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



// console.log(num);

let disp = document.getElementById("result")
let h = document.createElement('h3');
const randnum = Math.floor(Math.random()* 100) + 1;

console.log(randnum);

function guessnum(){
    event.preventDefault();

    
    let num = document.getElementById("num").value;
    if((num>=0)&&(num<=100)){
        if(num == randnum){
            h.innerHTML = "You Guessed Correctly";
            disp.appendChild(h);
        }
        else if(num > randnum){
            h.innerHTML = "You Guessed number is higher";
            disp.appendChild(h);
        }
        else{
            h.innerHTML = "Your Guessed number is lower";
            disp.appendChild(h);
        }
    }
    else{
        h.innerHTML="Enter A Valid Input Number";
        disp.appendChild(h);
    }
    
}