let choices = ["rock", "paper", "scissors"];
let winners = [];

function game() {
    for(let i = 1; i <=5; i++){
        playRound(i);
    }
    document.querySelector("button").textContent = "Play new game";
    logWins();
}

function playRound(round) {
    const userSelection = userPlay();
    const computerSelection = computerPlay();
    const winner = checkWinner(userSelection, computerSelection);
    winners.push(winner);
    logRound(userSelection, computerSelection, winner, round);
  }

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
};

function userPlay() {
    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt(
            "Type Rock, Paper, or Scissors. Spelling needs to be exact."
        );
        while (input == null) {
            input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
};
return input;
}

function validateInput(choice) {
    return choices.includes(choice);
}

function checkWinner(choiceU, choiceC) {
    if (choiceU === choiceC) {
        return "Tie";
    } else if (
        (choiceU === "rock" && choiceC == "scissors") ||
        (choiceU === "paper" && choiceC == "rock") ||
        (choiceU === "scissors" && choiceC == "paper")
    ) {
        return "User";
    } else {
        return "Computer";
    }
}

function logWins() {
    let userWins = winners.filter((item) => item == "User").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results:");
    console.log("User Wins:", userWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
}

function logRound(userSelection, computerSelection, winner, round) {
    console.log("Round:", round);
    console.log("User Chose:", userSelection);
    console.log("Computer Chose:", computerSelection);
    console.log(winner, "Won the Round");
    console.log("-------------------------------------");
}