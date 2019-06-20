import React, {Component} from 'react'
import {render} from 'react-dom'

import Calculator from '../../src'
const style = {
  height: '24rem',
  width: '15rem'
}
class Demo extends Component {
  handleInput(input) {
    console.log(`${input.expression} is shown in the calculator, User clicked the ${input.key}`)
  }

  onResultChange(newResult) {
    console.log(newResult)
    console.log(`${newResult.expression} is validated as ${newResult.result} `)
  }
  render() {
    return <div className='calculator-demo' style={style}>
      <h1>Calculator</h1>
      <Calculator
        onNewInput={this.handleInput}
        onResultChange={this.onResultChange}/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
