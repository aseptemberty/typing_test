import {ERASE_TEXT, START_TEXT} from "../actionTypes";
import {url} from "../../constants/constants";
import axios from "axios";

export function startExercise(){
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

   const hiddenInput =document.getElementById('HiddenInput')
   hiddenInput.focus()

   dispatch(startText(text))
 }
}

export function eraseText(){
 return {
   type:ERASE_TEXT
 }
}

export function startText(text){
 return{
  type:START_TEXT,
  text
 }
}