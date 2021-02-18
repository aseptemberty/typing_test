import {
  ERASE_TEXT,
  FINISH_EXERCISE,
  ONE_KEY_PRESSED,
  START_EXERCISE,
} from './actionTypes'
import { initialState } from './initialState'

export default function rootReducer (state = initialState, action) {
 switch (action.type) {
   case ONE_KEY_PRESSED:
     return {
       ...state,
       accuracy: action.accuracy,
       speed: action.speed,
     }
   case ERASE_TEXT:
     return {
       ...state,
       text: [{
         symbol: '',
         class: 'base'
       }],
       accuracy: 0,
       speed: 0,
       isFinished:false
     }
   case FINISH_EXERCISE:
     return {
       ...state,
       isFinished: true
     }
   case START_EXERCISE:
     return {
       ...state,
       speed: 0,
       text: action.text,
       accuracy: 0,
     }
   default:
     return state
   }
}