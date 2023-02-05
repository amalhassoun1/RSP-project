function computerSelection() {
    let options = ['rock', 'scissors', 'paper'];
    let computerOption = options[Math.floor(Math.random() * options.length)];
    return computerOption;
  }


function playerSelection() {
    let playerOption = prompt('Type');
    let lowerCasePlayer = playerOption.toLowerCase();
    while(!(
        lowerCasePlayer === 'rock' ||
        lowerCasePlayer === 'scissors' ||
        lowerCasePlayer === 'paper'
    )){
        alert("invalid user input");
        playerOption = prompt('Type');
        lowerCasePlayer = playerOption.toLowerCase();
    }
    return lowerCasePlayer;
  }


function playRound(computerSelect, lowerCasePlayer) {
    let result="";
    if(computerSelect=="rock" && lowerCasePlayer=="scissors"){
    result="computer";}
    else if(computerSelect=="scissors" && lowerCasePlayer=="paper"){
    result="computer";}
    else if(computerSelect=="paper" && lowerCasePlayer=="rock"){
    result="computer";}
    else if(computerSelect==lowerCasePlayer){
    result="equal";}
    else{
    result="player";}
    console.log("computer:"+computerSelect+" you:"+lowerCasePlayer);
    return result;
  }

function game(){
    let computerChoice= "";
    let playerChoice= "";
    let computerCounter= 0;
    let playerCounter= 0;
    for(let i=0;i<5;i++){
        computerChoice= computerSelection();
        playerChoice= playerSelection();
        if(playRound(computerChoice,playerChoice)== "computer")
        computerCounter++;
        else if(playRound(computerChoice,playerChoice)== "player")
        playerCounter++;
    }
    if (playerCounter > computerCounter)
        alert("Result is "+playerCounter+":"+computerCounter+"  you win");
    else if(computerCounter > playerCounter)
        alert("Result is "+playerCounter+":"+computerCounter+"  you lose");
    else{
        alert("Equal");
    }
   
}

game();
