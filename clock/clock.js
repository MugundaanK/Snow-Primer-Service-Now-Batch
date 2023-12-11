// setInterval(clock,1000)

// function clock(){
//     let time = new Date();
//     let hour = time.getHours();
//     let min = time.getMinutes();
//     let sec = time.getSeconds();

//     hour = hour<10 ? `0${hour}`: hour;
//     min = min<10 ? `0${min}` : min;
//     sec = sec<10 ? `0${sec}` : sec;

//     let curtime = `${hour} : ${min} : ${sec}`;

//     document.getElementById("body").innerHTML=curtime;
// }
// clock();

// let h = document.getElementById("hr");
// let m = document.getElementById("m");
// let s = document.getElementById("s");
// let ms = document.getElementById("ms");

// let hour = 0;
// let min = 0;
// let sec = 0;
// let millisec =0;
// let timer="";
// function start(){
//     timer = true;
//     stopwatch();
//     console.log("start");
// }
// function stop(){
//     timer = false;
//     stopwatch();
//     console.log("stop");
// }
// function reset(){
//     timer = false;
//     hour = 0;
//     min = 0;
//     sec = 0;
//     millisec =0;
//     hr.innerHTML = "00";
//     m.innerHTML = "00";
//     s.innerHTML = "00";
//     ms.innerHTML = "00";
//     console.log("reset");
// }

// function stopwatch(){

//     if(timer){
//         millisec++;

//         if(millisec == 100){
//             sec++
//             millisec = 0;
//         }
//         if(sec == 60){
//             min++;
//             sec = 0;
//             millisec = 0
//         }
//         if(min == 60){
//             hr++;
//             min = 0;
//             sec = 0;
//         }
//     }

//     let hour = hr;
//     let minute = min;
//     let second = sec;
//     let millisecond = millisec;

//     hour = hr<10 ? `0${hour}`: hour;
//     minute = min<10 ? `0${min}` : min;
//     second = sec<10 ? `0${sec}` : sec;
//     millisecond = millisec<10 ? `0${millisecond}` : millisecond;

//     hr.innerHTML = hour;
//     m.innerHTML = minute;
//     s.innerHTML = second;
//     ms.innerHTML = millisecond;    
//     setTimeout(stopwatch,11);

// }

// let hr = 0;
// let min = 0;
// let sec = 0;
// let millisec = 0;

// let swinterval;

// function updatetimer(){
//     millisec++;
//     sec = (millisec%60);
//     min = (millisec/60);
//     hr = (millisec/3600);
// }
