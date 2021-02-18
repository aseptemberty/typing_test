import React from 'react'
import {connect} from 'react-redux'
import './ExerciseText.css'
import { startClickHandler } from "../../context/actions/startClickhandler";
import FinishedExercise from "../FinishedExercise/FinishedExercise";

class ExerciseText extends React.Component {
  render() {
    return (
      <div className="row">
        {this.props.isFinished ?
          <FinishedExercise/> :
          <React.Fragment>
            <div className="col-sm-8">
              <div className="card">
                <div className="card-body">
                  <div>
                    {
                      this.props.text.map(
                        (letter, index) => {
                          return (
                            <span
                              className={letter.class}
                              key={index}>{letter.symbol}
                            </span>
                          )
                        }
                        )
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5>Speed </h5>
                  <p id='speed'>{this.props.speed} symbols per minute</p>
                  <h5>Accuracy </h5>
                  <p id='accuracy'>{this.props.accuracy} %</p>
                  <button
                    type="button"
                    id="start-button"
                    className="btn btn-outline-primary"
                    onClick={this.props.onStartClickHandler}
                  >Start</button>
                </div>
              </div>
            </div>
          </React.Fragment>
        }
      </div>
    )
  }
}

function mapStateToProps(state){
 return{
   text:state.text,
   accuracy:state.accuracy,
   speed:state.speed,
   isFinished: state.isFinished
 }
}

function mapDispatchToProps(dispatch){
 return{
     onStartClickHandler:()=>dispatch(startClickHandler())
 }
}

export default connect(mapStateToProps,mapDispatchToProps)(ExerciseText)