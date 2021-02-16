import react,{Component} from 'react'
import {connect} from 'react-redux'
import './ExerciseText.css'
import {startExercise} from "../../context/actions";

class ExerciseText extends react.Component {

    render() {
        return (
            <div className="row">
                <div className="col-sm-8">
                    <div className="card">
                        <div className="card-body">
                            <div>
                                {this.props.text.map((letter,index)=>{
                                    return(
                                        <span
                                            className={letter.class}
                                            key={index}
                                        >
                                            {letter.symbol}
                                        </span>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Buttons and stuff</h5>
                            <p>Speed</p>
                            <p id='speed'>0</p>
                            <p>Accuracy</p><p id='accuracy'>0</p>
                            <button
                                type="button"
                                id="start-button"
                                className="btn btn-outline-primary"
                                onClick={this.props.onStartExercise}
                            >Start</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        text:state.text
    }
}

function mapDispatchToProps(dispatch){
    return{
        onStartExercise:()=>dispatch(startExercise())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ExerciseText)