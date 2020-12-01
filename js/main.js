let options = ['rock', 'paper', 'scissors'];

function randomChoice() {
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

let messages = [
    {win: `Nice, you've won and that's because ${playerSelection} beats ${computerSelection}, congrats`},
    {tie: `Well, you've both chosen ${playerSelection} so it seems that there's a tie between you two, maybe try again`},
    {lose: `Oh noes, the computer has beaten you with ${computerSelection} against your ${playerSelection}`}
];
let afterMatchResult = () => {
    let result = playerSelection === options[2] && computerSelection === options[1] || playerSelection === options[1] && computerSelection === options[0] || playerSelection === options[0] && computerSelection === options[2] ? messages.win :
    playerSelection === computerSelection ? messages.tie : messages.lose;
    return result;
}
function play(playerSelection, computerSelection = randomChoice()) {
    playerSelection = prompt('Select your stuff');
    return afterMatchResult();
}
play();
