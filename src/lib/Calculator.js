import React from 'react';
import PropTypes from 'prop-types';
import ResultPanel, { replacement } from './ResultPanel';
import ButtonPanel from './ButtonPanel';
import { evaluate } from 'mathjs';

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      last: '',
      cur: '0'
    };
    this.onPaste = this.onPaste.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
    this.setStateAndNotify = this.setStateAndNotify.bind(this)
    this.keyMap = {}
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  onPaste(event){
    if(event.isTrusted) {
      const data = event.clipboardData || window.clipboardData;
      const pastedData = data.getData('Text')
      let cur;
      replacement.forEach((item) => {
        cur = pastedData.replace(item.dist, item.reg);
      });
      try {
        this.setStateAndNotify({
          cur: evaluate(cur).toString(),
          last: cur
        })
      } catch (e) {
        this.setStateAndNotify({
          cur,
          last: 'Not a valid expression'
        })
      }
    }
  }

  setStateAndNotify(newState) {
    this.setState(newState, this.props.onResultChange ? this.props.onResultChange({expression: newState.last, result: newState.cur}) : null)
  }

  handleKeyDown (event) {
    let button;
    if(event.ctrlKey || event.keyCode === 67){
      return
    }
    const key = (event.shiftKey ? 'shift+' : '') + event.keyCode || event.which;
    if (button = this.keyMap[key]) {
      button.click();
      event.stopPropagation();
      event.preventDefault();
    }
  }

  onButtonClick(type) {
    const {cur} = this.state
    const lastLetter = cur.slice(-1);
    switch (type) {
      case 'c':
        this.setStateAndNotify({
          last: '',
          cur: '0'
        });
        break;
      case 'back':
        this.setState({ cur: cur === '0' ? cur : cur.slice(0, -1) || '0' });
        break;
      case '=':
        try {
          const output = evaluate(cur).toString()
          this.setStateAndNotify({
            last: cur + '=',
            cur: output
          });
        } catch (e) {
          console.log(e)
          this.setState({
            last: cur + '=',
            cur: 'NaN'
          });
        }
        break;
      case '+':
      case '-':
      case '*':
      case '/':
      if(Number(cur) === 0 && type === '-') {
          this.setState({
            cur: type
          })
          break
        }
        if((lastLetter === '*' && type === '-') || (lastLetter === '/' && type=== '-')){
          this.setState({
            cur: cur + type
          })
          break
        }

        if (lastLetter === '+' || lastLetter === '-' || lastLetter === '*' || lastLetter === '/')
          this.setState({
            cur: cur.slice(0, -1) + type
          });
        else
          this.setState({
            cur: cur + type
          });
        break;
      case '.':
        if (lastLetter !== '.') {
          this.setState({
            cur: cur + type
          });
        }
        break;
      default:
        this.setState({
          cur: cur === '0' ? type : cur + type
        });
        break;
      }
      if(this.props.onNewInput) {
        this.props.onNewInput({expression: this.state.cur, key: type})
      }
  }
  render() {
    return (
      <div className="react-calculator"
        onPaste={this.onPaste}
        onKeyDown={this.handleKeyDown}>
        <ResultPanel {...this.state} />
        <ButtonPanel
          onClick={this.onButtonClick}
          onLoad={keyMap => {this.keyMap = keyMap}}/>
      </div>
    );
  }
}

Calculator.propTypes = {
  onNewInput: PropTypes.func,
  onResultChange: PropTypes.func,
}
