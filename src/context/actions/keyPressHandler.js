import {COUNT_ACCURACY} from "../actionTypes";
import {eraseText} from "./startExercise";
import {message} from "../../constants/constants";

let counterInputtedAnswers = 0
let counterRightAnswers = 0
let accuracy = 0

export function keyPressHandler (event,text) {
 return async dispatch => {
   const activeLetterSpan = document.querySelector('.active')
   const nextLetterSpan = document.querySelector('.base')
   const activeLetter = activeLetterSpan.innerText
   counterInputtedAnswers++

   if (text.length===counterInputtedAnswers){
     alert(message)
     dispatch(eraseText())
   }
   else {
     if (event === activeLetter) {
       activeLetterSpan.className = 'right'
       counterRightAnswers++
     }
     else {
       activeLetterSpan.className = 'wrong'
     }
       nextLetterSpan.className = 'active'
       accuracy = mathAccuracy(counterRightAnswers, counterInputtedAnswers)
       dispatch(countAccuracy(accuracy))
   }
 }
}

function mathAccuracy (correct, all) {
 return Math.round((((correct / all).toFixed(2)) * 100))
}

function countAccuracy (accuracy) {
 return {
   type: COUNT_ACCURACY,
   accuracy
 }
}