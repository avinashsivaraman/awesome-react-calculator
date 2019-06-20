import React, {Component} from 'react'
import {render} from 'react-dom'

import Calculator from '../../src'
const style = {
  height: '24rem',
  width: '15rem'
}
class Demo extends Component {
  render() {
    return <div className='calculator-demo' style={style}>
      <h1>Calculator</h1>
      <Calculator/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
