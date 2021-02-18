import {  FINISH_EXERCISE, ONE_KEY_PRESSED } from "../actionTypes";

import {speedCounter} from "./speedCounter";
let counterInputtedAnswers = 0
let counterRightAnswers = 0
let accuracy = 0

export function keyPressHandler (event,text) {
  return async dispatch => {
    if (text.length===counterInputtedAnswers){
      dispatch(finishExercise())
    }
    else {
      const activeLetterSpan = document.querySelector('.active')
      const nextLetterSpan = document.querySelector('.base')
      const activeLetter = activeLetterSpan.innerText
      counterInputtedAnswers++

      if (event === activeLetter) {
        activeLetterSpan.className = 'right'
        counterRightAnswers++
      }
      else {
        activeLetterSpan.className = 'wrong'
      }
       if (nextLetterSpan){nextLetterSpan.className = 'active'}

      accuracy = mathAccuracy(counterRightAnswers, counterInputtedAnswers)

      dispatch(oneKeyPressed(accuracy,speedCounter()))

  }
}
}

function mathAccuracy (correct, all) {
 return Math.round((((correct / all).toFixed(2)) * 100))
}

function oneKeyPressed(accuracy,speed){
  return {
    type:ONE_KEY_PRESSED,
    accuracy,
    speed,
  }
}
function finishExercise(){
  return {
    type: FINISH_EXERCISE
  }
}