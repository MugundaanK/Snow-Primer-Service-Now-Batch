//1
let str = "I am enjoying my training";
console.log(str.indexOf('my'));

//2
console.log(str.indexOf('m'));

//3
let s = str.slice(3);
console.log(s);

//4
let s1 = str.slice(0,4);
console.log(s1);

//5
console.log(str.replace('training',"journey"));

//6
for(let k in str){
    console.log(str.charAt(k));
}

//7
let s2 = "a,b,c";
let a1 = s2.split(",");
console.log(a1);

//8
let s3 = "   abc    ";
console.log(s3);
console.log(s3.trim());

//9
let a = " Hi!";
let b = " Everyone...";
console.log(a.concat(b));



let prom = new Promise((resolve, reject) => {
    console.log("Please wait...");

    setTimeout(() =>{
        if(2>=1){
            resolve("Success");
        }
        else{
            reject("Failed");
        }
    },4000);
});

prom.then((result) => {
    console.log(result);
})
.catch((result) => {
    console.log(result);
})