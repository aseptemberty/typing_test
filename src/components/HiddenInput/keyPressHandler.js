let counterInputtedAnswers=0;
let counterRightAnswers=0;
let accuracy = 0;

export const keyPressHandler=(event)=>{
    const inputtedLetter =event.key
    const activeLetterSpan=document.querySelector('.active')
    const nextLetterSpan=document.querySelector('.base')
    const activeLetter=activeLetterSpan.innerText
    counterInputtedAnswers++;
    if (inputtedLetter===activeLetter){
        activeLetterSpan.className='right';
        counterRightAnswers++;
    }
    else{
        activeLetterSpan.className='wrong';
    }
    nextLetterSpan.className='active';
    accuracy = countAccuracy(counterRightAnswers, counterInputtedAnswers)
    showAccuracy(accuracy)
}
function showAccuracy(){
    const accuracyPlace=document.getElementById('accuracy')
    accuracyPlace.innerText=(accuracy+" %")
}
 function countAccuracy(correct, all) {
     return Math.round((((correct/all).toFixed(2))*100))
 }
