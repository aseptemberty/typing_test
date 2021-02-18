import React from 'react'
import './HiddenInput.css'
import {keyPressHandler} from '../../context/actions/keyPressHandler'
import { speedCounter } from '../../context/actions/speedCounter'
import { connect } from 'react-redux'

class HiddenInput extends React.Component {
 render () {
   return (
     <input
       type="text"
       className="HiddenInput"
       id='HiddenInput'
       onKeyPress={event => this.props.onKeyPressHandler(event.key,this.props.text)}
       onKeyDown={this.props.onKeyDownHandler()}
     />
   )
 }
}

function mapStateToProps(state){
  return{
    text:state.text,
  }
}

function mapDispatchToProps (dispatch) {
 return {
   onKeyPressHandler: (event,text) => dispatch(keyPressHandler(event,text)),
   onKeyDownHandler: () => dispatch(speedCounter())
 }
}
export default connect(mapStateToProps, mapDispatchToProps)(HiddenInput)