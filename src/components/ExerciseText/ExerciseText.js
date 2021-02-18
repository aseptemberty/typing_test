import React from 'react'
import {connect} from 'react-redux'
import './ExerciseText.css'
import {startExercise} from "../../context/actions/startExercise";

class ExerciseText extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-8">
          <div className="card">
            <div className="card-body">
              <div>
                {this.props.text.map(
                  (letter,index)=>{
                    return(
                      <span
                        className={letter.class}
                        key={index}>{letter.symbol}
                      </span>
                    )
                  }
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5>Speed </h5>
              <p>{this.props.speed} symbols per minute</p>
              <h5>Accuracy </h5>
              <p>{this.props.accuracy} %</p>
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
   text:state.text,
     speed:state.speed,
     accuracy:state.accuracy
 }
}

function mapDispatchToProps(dispatch){
 return{
   onStartExercise:()=>dispatch(startExercise())
 }
}

export default connect(mapStateToProps,mapDispatchToProps)(ExerciseText)