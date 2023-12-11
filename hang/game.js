let disp = document.getElementById("disp");
let body = document.getElementById("body");
let check = document.getElementById("check");
let dash = document.getElementById("dash")


let country = ["afganisthn","albania","australia","belgium","brazil","canada","china","france","germany","india","indonasia","japan","korea","mexico","morocco","nepal","newzealand"];
let choice = Math.floor(Math.random()*country.length);
let cname = country[choice];
let cspace = cname.length;

let result = document.getElementById("result");
let res = document.createElement("h3");
res.setAttribute("h3","reshead");

disp.innerHTML = "The Country Name Consist Of "+ cspace +" Letters";

let cstring = "";
let dasharr;
let count = 5;
let lcount = document.getElementById("lcount");
let attempt = document.getElementById("attempt");

function dashcreation(){
    console.log(cname);
    dasharr = cname.split("");
    console.log(dasharr);
    for(let i=0 ; i< cspace ; i++){
        dasharr[i] = "_ ";
    }
    cstring = dasharr.join(" ");
    dash.innerText = cstring;
    disp.appendChild(dash);
    console.log(cstring);
}
dashcreation();


function game(){
    let letter = document.getElementById("letter").value;
    console.log(letter);
    let i = cname.indexOf(letter);
    if(i != -1){
        for(let j=0 ; j<cname.length ; j++){
            if(cname.charAt(j) == letter){
                dasharr[j] = letter;
            }
        }
        cstring = dasharr;
        cstring = dasharr.join(" ");
        dash.innerText = cstring;
        disp.appendChild(dash);
        console.log("After update  "+cstring);
    }
    else{
        count--;
        lcount.innerText = count;
        attempt.appendChild(lcount);
    }
    output(count);
    letter.innerText="";  
}

function output(count) {
    if(count == 0){
        body.innerHTML="";
        res.innerHTML = "! Oops You losed all your Attempts !";
        body.appendChild(res);

    }
    else{
        if(cstring.indexOf("_") == -1){
            body.innerHTML="";
            res.innerHTML = " Congratulaitons You Won !!!";
            body.appendChild(res);
        }
    }
}

