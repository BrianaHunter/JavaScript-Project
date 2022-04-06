var totalScore = 0;
var totalPar = 0;
var numberOfHolesToPlay = 0;
var userName = prompt("Welcome to Grand Circus mini golf! What is your name?");
console.log(userName);

numberOfHolesToPlay = parseInt(prompt("Hello " + userName + ", would you like to play 3 or 6 holes?"));
totalPar = (3*numberOfHolesToPlay);
console.log(numberOfHolesToPlay);

for (let i = 0; i < numberOfHolesToPlay; i++){
    totalScore = totalScore + parseInt(prompt("How many putts for hole " + (i+1) + "? (par 3)"));
};

totalComparedToPar = totalScore - totalPar;
console.log(totalComparedToPar);

if (totalComparedToPar === totalPar){
    alert("Good game, " + userName + " . Your total par was " + totalComparedToPar);
    console.log("Good game, " + userName + " . Your total par was " + totalComparedToPar);
}
else if (totalComparedToPar > totalPar){
    alert("Nice Try, " + userName + "! Your total par was " + totalComparedToPar);
    console.log("Nice Try, " + userName + "! Your total par was " + totalComparedToPar);
}
else if (totalComparedToPar < totalPar){
    alert("Great job, " + userName + " . Your total par was " + totalComparedToPar);
    console.log("Great job, " + userName + ". Your total par was " + totalComparedToPar);
}