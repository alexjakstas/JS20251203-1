"use strict";

const freeDrop = 9.8

let jumpHigh = +prompt("Iš kokio aukščio šoka parašiutininkas: ")
let parasuteOpeningTime = +prompt("Per kiek laiko išsiskleidžia parašiutas: ")
let objectReachesGround = Math.sqrt((2 * jumpHigh) / freeDrop);

if (objectReachesGround >= parasuteOpeningTime){
    console.log("Parašiutas spės išsiskleisti");
} 
else{
    console.log("Parašiutas nespės išsiskleisti");
}