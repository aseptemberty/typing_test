export function parseToSymbols(text) {
    let textTransformed = text.split('')
    let textForExport = textTransformed.map((symbol,index)=> {
       return  {
            symbol,
            class: 'base',
            passed:false,
            right:false,
            key:index
        }
    })
    return textForExport



    // const startButton=document.getElementById('start-button')
    // startButton.addEventListener('click',async ()=>{
    //     let symbols= await getText();
    //     console.log('Symb',symbols)
    //     return symbols
    //     })

}
