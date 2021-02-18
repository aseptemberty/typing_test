import { COUNT_SPEED } from '../actionTypes'

let LastTime = 0
let Time = 0
let Total = 0
let Keys = 0

export function speedCounter () {
 return async dispatch=>{
   Time = new Date().getTime()
   let speed=0
   if (LastTime !== 0) {
     Keys++
     Total += Time - LastTime
     speed=Math.round(Keys / (Total / 1000 / 60))
   }
   LastTime = Time
   dispatch (countSpeed(speed))
 }
}

export function countSpeed (speed) {
 return {
   type: COUNT_SPEED,
   speed
 }
}
