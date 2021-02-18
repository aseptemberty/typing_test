import {COUNT_ACCURACY, COUNT_SPEED, ERASE_TEXT, START_TEXT} from './actionTypes'
import { initialState } from './initialState'

export default function rootReducer (state = initialState, action) {
 switch (action.type) {
   case COUNT_ACCURACY:
     return {
       ...state,
       accuracy: action.accuracy
     }
   case COUNT_SPEED:
     return {
       ...state,
       speed: action.speed
     }
   case ERASE_TEXT:
     return {
       ...state,
       text: [{
         symbol: '',
         class: 'base'
       }],
       accuracy: 0,
       speed: 0
     }
   case START_TEXT:
     return {
       ...state,
       text: action.text
     }
   default:
     return state
   }
}