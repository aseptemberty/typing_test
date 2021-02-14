import './HiddenInput.css'
import {onSubmit} from "../Typing";

function HiddenInput(){
    return(
                <input
                    type="text"
                    className="HiddenInput"
                    id='hiddenInput'
                    onKeyPress={event=>onSubmit(event)}/>
    );
}
        export default HiddenInput