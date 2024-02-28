let compScore=0;
let userScore=0;
const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user");
const CompScorepara=document.querySelector("#comp");

choices.forEach((choice)=>
{
    choice.addEventListener('click',()=>
    {
        const userchoiceId=choice.getAttribute("id");
        playgame(userchoiceId);
    })
})

function playgame(userchoiceId)
{
    console.log("User Choice=",userchoiceId)
    const compChoice=gencomp();
    console.log("Computer Choice=",compChoice)
    if(userchoiceId==compChoice)
    {
        drawgame();
    }
    else{
        let userWin=true;
        if(userchoiceId=="rock")
            {
            if(compChoice=="paper")
                userWin=false;
            else
            userWin=true;
            }
        else if(userchoiceId=="paper")
            {
                if(compChoice=="rock")
                userWin=true;
                else
                userWin=false;
            }
        else 
            {
                if(compChoice=="paper")
                userWin=true;
                else
                userWin=false;
            }
            showWinner(userWin,userchoiceId,compChoice);
    }


}

function gencomp(){
    const options=["rock","paper","scissors"];
    const randindex=Math.floor(Math.random()*3);
    return options[randindex];
}


function showWinner(userWin,userchoiceId,compChoice)
{
    const capitalizedUserChoice = userchoiceId.charAt(0).toUpperCase() + userchoiceId.slice(1);
    const capitalizedcompChoice = compChoice.charAt(0).toUpperCase() + compChoice.slice(1);
    if(userWin)
    {
        console.log("You win");
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You Win!  Your ${capitalizedUserChoice} beats ${capitalizedcompChoice}`;
        msg.style.backgroundColor="green";
    }
    else
    {
        console.log("You lose");
        compScore++;
        CompScorepara.innerText=compScore;
        msg.innerText=`You lose. ${capitalizedcompChoice} beats your ${capitalizedUserChoice}`;
        msg.style.backgroundColor="red";
    }
}
function drawgame()
{
    console.log("game is tie");
    msg.innerText="Game was Draw";
    msg.style.backgroundColor="orange";
}
