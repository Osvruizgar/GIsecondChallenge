//very easy
// function min(firstNumb, secondNum) {
//   const smallest = firstNumb < secondNum ? firstNumb : secondNum;
//   console.log(smallest);
// }
// min(6, 4);
// I like the bottom code more but Im keeping the top one to review when I come back.

//very easy

function min(firstNumb, secondNum) {
    return smallest = firstNumb < secondNum ? firstNumb : secondNum;
  }
  console.log(min(6, 4));

//EASY

const firstStudent = ["Slim", "Shady", 15];
const seconStudent = ["Dr.","Dre", 17];
const thirdStudent = ["50","Cent", 16];
const gClass = [firstStudent, seconStudent, thirdStudent];
console.log(`Hello, my name is ${gClass[0][0]} ${gClass[0][1]} and I'm ${gClass[0][2]} years old.`)

// theres probably a shorter version to knock this out.. but I can explain this to myself.

//Medium
//don't want to do the easy way that I know will work. I want to try something different.
//I need to comeback to this and find a better way to code this. IT DOES WORK THOUGH!! I am proud
const userInput = Number(prompt ("type a Number from 1 to 12 (digits) and youll get the corresponding month"));
const calender = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function amongtBetrayed () {
  const arraylength = calender.length;
  console.log(arraylength)
  for (let loopNumber = 1; loopNumber <= arraylength; loopNumber++) {
      if (loopNumber === userInput) {
          console.log(calender[userInput - 1]);
        }else {
          alert("you have to select  1 2 3 4 5 6 7 8 9 10 11 12 ");
      }
  }
}
amongtBetrayed();

//hard...........
const tomHeight = 9;
const jerryHeight = 10;
const tomMass = 8;
const jerryMass = 45; 
const tomBMI = tomMass/tomHeight **2;
const jerryBMI = jerryMass/jerryHeight**2;
console.log(tomBMI);
console.log(jerryBMI);
function booleanFunction () {
  if (jerryBMI > tomBMI) {
    return false;
    //I dislike writing dead code. It is unnecessary
  } else {
   return true;
  }
}
console.log("Is Tom's BMI higher than Jerry's? " + booleanFunction());