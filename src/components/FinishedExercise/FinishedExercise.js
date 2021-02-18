import React from 'react'
import { connect } from 'react-redux'
import Nemi from './nemi1'

export class FinishedExercise extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h6>That's Nemi</h6>
              <img src={Nemi} width="100%" alt=''/>
            </div>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="card">
            <div className="card-body">
              <h5 >Congratulations!</h5>
              <hr />
              <p>You finished test!</p>
              <p>Your speed - {this.props.speed} symbols per minute</p>
              <p>Your accuracy - {this.props.accuracy} %</p>
              <p>Please, give me the job, so I'll have money to feed my dog</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state){
    return{
        accuracy:state.accuracy,
        speed:state.speed,
    }
}

export default connect(mapStateToProps)(FinishedExercise)