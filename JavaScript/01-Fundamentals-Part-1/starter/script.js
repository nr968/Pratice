/*let js = 'amazing';
console.log(40+8+23-10); 

//ASSIGNMENT 1
let country = 'India';
let continent ='Asia';
let population='1,405,087,832';

console.log(country + continent + population);

//ASSIGNMENT 2
let isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof language);


//CODING CHALLENGE 1

let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / (markHeight**2); 
let johnBMI = johnWeight / (johnHeight**2);

let markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markBMI = markWeight / (markHeight**2); 
johnBMI = johnWeight / (johnHeight**2);

markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

// CODING CHALLENGE 2
//Continue from coding challenge 1

if(markHigherBMI){
    console.log(`Mark's BMI(${markBMI}) is higher than John's MBI(${johnBMI})`);
}else{
    console.log(`John's BMI(${johnBMI}) is higher than Mark's MBI(${markBMI})`);
}

//CODING CHALLENGE 3
const dolphinsScore = (97+112+101)/3;
const koalasScore = (109+95+106)/3; 

console.log(dolphinsScore, koalasScore);

if(dolphinsScore>koalasScore && dolphinsScore>=100){
    console.log(`Dolphins Win!!`);
}else if(koalasScore > dolphinsScore && koalasScore>=100){
    console.log(`Koalas Win!!`);
}else if(dolphinsScore===koalasScore && dolphinsScore>=100 && koalasScore>=100){
    console.log(`Match Draw!!`);
}else{
    console.log(`No one Wins`)
}*/

//CODING CHALLENGE 4
const bill = 430;
const tip = (bill>=50 && bill<=300) ? 0.15*bill : 0.2*bill;
const totalBill = bill+tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalBill}`);