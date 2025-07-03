let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const gencompChoice = () => {
    const options=["rock","paper","scissor"];
    const ranInd=Math.floor(Math.random()*3);
    return options[ranInd];
}
const drawGame = () => {
    msg.innerHTML="GAME DRAW.PLAY AGAIN!";
}
const showWinner = (userWin,userChoice,compChoice) => {
   if(userWin){
   userScore++;
   userScorePara.innerHTML=userScore;
    msg.innerHTML="HURRAY!YOU WON";
    msg.style.backgroundColor = "green";
     showEmojis('win');
   }else{
    compScore++;
    compScorePara.innerHTML=compScore;
    msg.innerHTML="YOU LOSE.TRY AGAIN!";
    msg.style.backgroundColor = "red";
     showEmojis('lose');
   }
};
const playGame=(userChoice) => {
      const compChoice=gencompChoice();
       if(userChoice==compChoice){
        drawGame();
       }
       else{
        let userWin=true;
        if(userChoice=="rock"){
userWin = compChoice==="paper" ? false : true;
        }
        else if(userChoice== "paper"){
            userWin= compChoice==="scissor" ? false : true;
        }
        else{
            userWin=compChoice==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
       }
};
choices.forEach((choice) =>{
 const userChoice=choice.getAttribute("id");
   choice.addEventListener("click",()=>{
   playGame(userChoice);
   })
})
 function showEmojis(type) {
    const container = document.getElementById('emoji-container');
    const emoji = type === 'win' ? '🎉' : '😢';

    for (let i = 0; i < 30; i++) {
      const el = document.createElement('div');
      el.classList.add('emoji');
      el.style.left = Math.random() * 100 + 'vw';
      el.style.top = Math.random() * 100 + 'vh';
      el.textContent = emoji;
      container.appendChild(el);
      setTimeout(() => {
        el.remove();
      }, 2000);
    }
  }
