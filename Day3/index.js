//Pattern Printing
let r = parseInt(prompt("Enter The row count"));

var pat = "";
if(r>0){
    for(let i=0; i<r; i++){
        for(let j=0; j<=i; j++){
            pat += "*";
        }
        pat += '\n';
    }
}
 
// Factorial
console.log(pat);

var f = parseInt(prompt("Enter a Number "));
var ans = 1;
console.log(factorial(f));

function factorial(f){
    for(let i=1; i<=f ; i++){
        ans *= i;
    }
    return ans;
}


// Calculator
alert("Sum, Minus, Multiplication");
let op = prompt("Enter The Operation")
let n1 = parseInt(prompt("Enter First Number "));
let n2 = parseInt(prompt("Enter Second Number "));

let Sum = (n1,n2) =>{console.log(n1+n2)};
let Minus = (n1,n2) =>{console.log(n1-n2)};
let Mult = (n1,n2) =>{console.log(n1*n2);}

switch (op){
    case "+" :
        Sum(n1,n2);
        break;

    case "-" :
        Minus(n1,n2);
        break;
    
        case "*" :
        Mult(n1,n2);
        break;
    
    default:
        alert("Enter Valid Option");
        break;
    
}
