# Awesome React Calculator

Awesome React Calculator is a React Component library. It gives you a simple calculator component to work in your project. It supports keyboard and you can paste your expression to get the result.

## Installation

Use the npm or yarn to install

```bash
npm install -S awesome-react-calculator
```
```bash
yarn add awesome-react-calculator
```

## Live Demo or Example

[Live Demo](https://csb-ncxvw.netlify.com/) or [Usage](https://codesandbox.io/embed/loving-bird-ncxvw)


## Usage

```javascript

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
```
## Options

### Props
| Props  | Return Type   | Usage |
|---|---|--- |
| OnKeyPress  | string | Triggered when some key is pressed|
| onButtonClick  | string | Triggered when some button is clicked|
| onResultChange  | string | Returns the result shown in calculator and triggered whenever the result is changed|


### Note
Please set the **width and height** of the parent div of our the <Calculator /> Component


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)