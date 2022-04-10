let userName = prompt("Welcome to GC Mini Golf! What is your name?");
console.log(userName);

let totalFinalScore = 0;
let totalPar = 0;
let numberHolesOfGolf = 0;

numberHolesOfGolf = parseInt(prompt(userName + ", would you like to play 3 or 6 holes of mini golf?"));
totalPar = (3*numberHolesOfGolf);
console.log(numberHolesOfGolf);

for (let i = 0; i < numberHolesOfGolf; i++){
    totalFinalScore = totalFinalScore + parseInt(prompt("How many putts for hole " + (i+1) + "? (par 3)"));
};

totalComparedToPar = totalFinalScore - totalPar;
console.log(totalComparedToPar);

if (totalComparedToPar === totalPar){
    alert("Great game! " + userName + " Your total par was " + totalComparedToPar);
    console.log("Great game! " + userName + " Your total par was " + totalComparedToPar);
}
else if (totalComparedToPar > totalPar){
    alert("Nice Try, " + userName + " Your total par was " + totalComparedToPar);
    console.log("Nice Try, " + userName + " Your total par was " + totalComparedToPar);
}
else if (totalComparedToPar < totalPar){
    alert("Great job! " + userName + " Your total par was " + totalComparedToPar);
    console.log("Great job! " + userName + " Your total par was " + totalComparedToPar);
}
