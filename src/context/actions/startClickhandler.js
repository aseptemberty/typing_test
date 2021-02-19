import { ERASE_TEXT, START_EXERCISE } from "../actionTypes";
import { url } from "../../constants/constants";
import axios from "axios";
import {inputFocus} from "./inputFocus";

export function startClickHandler(){
  return async dispatch=>{
    dispatch(eraseText())
      const response= await axios.get(url)
        const text=[]
          response.data.split('').forEach(symbol=>
            text.push({
              symbol,
              class:'base'
              })
          )
      const firstSymbol=text[0]
      firstSymbol.class='active'

      inputFocus()

      dispatch(startExercise(text))
 }
}

export function eraseText(){
 return {
   type:ERASE_TEXT
 }
}

export function startExercise(text){
 return{
  type:START_EXERCISE,
  speed:0,
  text
 }
}