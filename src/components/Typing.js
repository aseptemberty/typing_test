let counterInputtedAnswers=0
let counterRightAnswers=0
let accuracy=Math.round((counterRightAnswers/counterInputtedAnswers))

export const onSubmit=(event)=>{
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
}