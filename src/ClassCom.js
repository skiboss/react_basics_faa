import React, { Component } from 'react'
import './styles.css'

class ClassCom extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         presentState: ''
      }
      this.toggleState = this.toggleState.bind(this)
    }

    toggleState() {
        this.setState(prevState => ({
            presentState: !prevState.presentState
        }))
    }
  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <button onClick={this.toggleState} className='button'>
            {this.state.presentState ? 'Off' : 'On'}
        </button>
      </div>
    )
  }
}

export default ClassCom