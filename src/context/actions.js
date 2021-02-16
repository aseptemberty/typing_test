import {ERASE_TEXT, START_TEXT} from "./actionTypes";
import {url} from "../axios/url";
import axios from "axios";

export function startExercise(){
    return async dispatch=>{
        dispatch(eraseText())
        const response= await axios.get(url)
        // return await response.data
        let splittedText=response.data.split('')
        const text=[]
        splittedText.map(symbol=>{
            text.push({
                symbol,
                class:'base'
            })
        })
        const firstSymbol=text[0]
        firstSymbol.class='active'

        const hiddenInput =document.getElementById('hiddenInput')
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