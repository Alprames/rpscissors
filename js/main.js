let options = ['rock', 'paper', 'scissors'];

function randomChoice() {
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

let messages = [
    {win: `Nice, you've won and that's because ${playerSelection} beats ${computerSelection}, congrats`},
    {tie: `Well, you've both chosen ${playerSelection} so it seems that there's a tie between you two, maybe try again`},
    {lose: `Oh noes, the computer has beaten you with ${computerSelection} against your ${playerSelection}`}
]

function play(playerSelection, computerSelection = randomChoice()) {
    playerSelection = prompt('And now, give me your choice');
    if (playerSelection === options[2] && computerSelection === options[1] || playerSelection === options[1] && computerSelection === options[0] || playerSelection === options[0] && computerSelection === options[2]) {
        console.log(winMessage);
    } else if (playerSelection === computerSelection) {
        console.log(tieMessage); 
    } else {
        console.log(loseMessage);
    }
}
play();
