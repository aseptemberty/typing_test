import { ERASE_TEXT, START_TEXT} from "./actionTypes";
import {initialState} from './initialState'

export default function rootReducer(state=initialState,action){
    switch (action.type){
        case START_TEXT:
            return {
                ...state,
                text: action.text
            }
        case ERASE_TEXT:
            return {
                text:[{
                    symbol:'',
                    class:'base',
                }]
            }
        default:
            return state
    }

}