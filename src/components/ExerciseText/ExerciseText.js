import react from 'react'
import {getText} from "../../axios/axios";
import {parseToSymbols} from "../Symbols";
import './ExerciseText.css'

export default class ExerciseText extends react.Component {
    state ={
        text: [],
    }

    componentDidMount(){
        const startButton=document.getElementById('start-button')
        startButton.addEventListener('click',async ()=>{
            const hiddenInput=document.getElementById('hiddenInput')
            hiddenInput.focus()
            let splitedText = parseToSymbols(await getText())
            this.setState( {text: splitedText})
            const activeLetter=document.querySelector('span')
            activeLetter.className='active'
        })

    }

    render() {
        return (
            <div>
                {this.state.text.map((item)=>{
                    return <span className={item.class} key={item.key}>{item.symbol}</span>
                })}
            </div>
        )
    }
}
