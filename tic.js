console.log("Welcome To tic tac toe")
let music = new Audio("Background.mp3")
let Audioturn = new Audio("ting.mp3")
let gameover = new Audio("lossing_sound.mp3")

let turn = "x";
// Function to change the turn 
const changeTurn = () =>{
    return turn=== "x"?"0": "x";
}
//Function to check for a win
const checkWin=() =>{

}
//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
   let boxtext = document.querySelector('.boxtext')
   element.addEventListener('click' , ()=>{
    if(boxtext.innerText ===' '){
        boxtext.innerText = turn;
        changeTurn();
        Audioturn.play();
        checkWin();
        document.getElementsByClassName("turn")[0].innerText = "Turn for" + turn;
    }
   })
})