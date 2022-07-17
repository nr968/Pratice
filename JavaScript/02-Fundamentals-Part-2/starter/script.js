//CODING CHALLENGE 1

/*const calcAverage = (score1, score2, score3) => (score1+score2+score3)/3;


const dolphinsAverage = calcAverage(85, 54, 41);
const koalasAverage = calcAverage(23, 34, 27);
console.log(dolphinsAverage, koalasAverage);

function checkWinner(avgDolphins, avgKoalas){

    if(avgDolphins>=(2*avgKoalas)){
        console.log(`Dolphins win(${avgDolphins} vs ${avgKoalas})`);
    }else if(avgKoalas>=(2*avgDolphins)){
        console.log(`Koalas win(${avgKoalas} vs ${avgDolphins})`);
    }else{
        console.log(`No Team wins!`)
    }

}

checkWinner(dolphinsAverage, koalasAverage);

//CODING CHALLENGE 2

const calcTip = bill => bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];

console.log(bills, tips, total);

//CODING CHALLENGE 3

const mark = {
    firstName : "Mark Miller",
    mass : 78,
    height : 1.69,
    calcBMI : function (){
        this.bmi =  this.mass/(this.height**2);
        return this.bmi;
    }
}

const john = {
    firstName : "John Smith",
    mass : 92,
    height : 1.95,
    calcBMI : function (){
        this.bmi =  this.mass/(this.height**2);
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi > john.bmi ? 
    `${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})` : 
    `${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})` ); 

//CODING CHALLENGE 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [],
  totals = [];

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(bills, tips, totals);

console.log(calcAverage(totals)); */

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

let max = 0;
let min = 0;

for (let i = 0; i < temperatures.length; i++) {
  if (temperatures[i] === 'error') {
    continue;
  }
  if (max < temperatures[i]) {
    max = temperatures[i];
  }
  if (min > temperatures[i]) {
    min = temperatures[i];
  }
}

console.log(`MAX - ${max} MIN - ${min}`);
