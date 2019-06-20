import React, {Component} from 'react'
import {render} from 'react-dom'

import Calculator from '../../src'
const style = {
  height: '24rem',
  width: '15rem'
}
class Demo extends Component {
  handleInput(input) {
    console.log(`${input} key is pressed or entered`)
  }

  onResultChange(newResult) {
    console.log(`${newResult} has been shown`)
  }
  render() {
    return <div className='calculator-demo' style={style}>
      <h1>Calculator</h1>
      <Calculator
        onKeyPress={this.handleInput}
        onButtonClick={this.handleInput}
        onResultChange={this.onResultChange}/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
