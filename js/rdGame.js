
const guessForm=document.getElementById("js-guess")
const result=document.getElementById("js-result")
const maxNumber=document.getElementById("maxNumber")

function handleGuessSubmit(e){
  e.preventDefault()
  const guessInput=guessForm.querySelector("input")
  if(guessInput.value==="" || maxNumber === ""){
    return;
  }
  const max=maxNumber.value
  const random=Math.ceil(Math.random()*max)
  const userGuess=parseInt(guessInput.value,10)
  const resultSpan=result.querySelector("span")
  resultSpan.innerHTML=`
  You chose: ${userGuess},
  the machine chose: ${random}.<br/>
  <strong>${userGuess === random ? "You won" :"You lost!"}</strong>`
  //간단한 함수로 처리 가능함.
}

guessForm.addEventListener("submit",handleGuessSubmit) 
//submit으로 처리하면 될 것을 나는 button click으로 처리...
