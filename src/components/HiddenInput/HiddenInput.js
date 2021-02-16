import './HiddenInput.css'
import {keyPressHandler} from "./keyPressHandler";
import {speedCounter} from "./speedCounter";


function HiddenInput(){
    return(
                <input
                    type="text"
                    className="HiddenInput"
                    id='hiddenInput'
                    onKeyPress={event=>keyPressHandler(event)}
                    onKeyDown={speedCounter}
                />
    );
}
        export default HiddenInput