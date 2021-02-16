let LastTime=0;
let Time=0;
let Total=0;
let Keys=0;
export function speedCounter(){
    Time= new Date().getTime();
    if(LastTime!==0){
        Keys++;
        Total+=Time-LastTime;

    }
    LastTime=Time
    let speed=(Math.round(Keys/Total*6000))
    const speedPlace=document.getElementById('speed')
    speedPlace.innerText=(speed+' letters per minute')
}