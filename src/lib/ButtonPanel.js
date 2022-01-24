import React from 'react';

export default class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this)
  }

  onClick(event){
    const target = event.target;
    target.classList.remove('clicked');
    setTimeout(() => {
      target.classList.add('clicked');
    }, 0);
    this.props.onClick(target.dataset.value);
  }

  componentDidMount() {
    let buttons = document.querySelectorAll('.react-calc button');
    buttons = [].slice.call(buttons);
    const keyMapping = {}
    buttons.forEach((button) => {
      keyMapping[button.dataset.code] = button;
    });
    this.props.onLoad(keyMapping)
  }

  render() {
    return (
      <div className="react-calc button-panel row">
        <div className="s3 column">
          <div className="s1 row">
            <button className="button s2" data-code="67" data-value="c" onClick={this.onClick}>C</button>
            <button className="button s1" data-code="8" data-value="back" onClick={this.onClick}>←</button>
          </div>
          <div className="s1 row">
            <button className="button s1" data-code="55" data-value="7" onClick={this.onClick}>7</button>
            <button className="button s1" data-code="56" data-value="8" onClick={this.onClick}>8</button>
            <button className="button s1" data-code="57" data-value="9" onClick={this.onClick}>9</button>
          </div>
          <div className="s1 row">
            <button className="button s1" data-code="52" data-value="4" onClick={this.onClick}>4</button>
            <button className="button s1" data-code="53" data-value="5" onClick={this.onClick}>5</button>
            <button className="button s1" data-code="54" data-value="6" onClick={this.onClick}>6</button>
          </div>
          <div className="s1 row">
            <button className="button s1" data-code="49" data-value="1" onClick={this.onClick}>1</button>
            <button className="button s1" data-code="50" data-value="2" onClick={this.onClick}>2</button>
            <button className="button s1" data-code="51" data-value="3" onClick={this.onClick}>3</button>
          </div>
          <div className="s1 row">
            <button className="button s2" data-code="48" data-value="0" onClick={this.onClick}>0</button>
            <button className="button s1" data-code="190" data-value="." onClick={this.onClick}>.</button>
          </div>
        </div>
        <div className="s1 column">
          <button className="last button s1" data-code="191" data-value="/" onClick={this.onClick}>÷</button>
          <button className="last button s1" data-code="shift+56" data-value="*" onClick={this.onClick}>×</button>
          <button className="last button s1" data-code="189" data-value="-" onClick={this.onClick}>-</button>
          <button className="last button s1" data-code="shift+187" data-value="+" onClick={this.onClick}>+</button>
          <button className="last button s1 button-equal" data-code="13" data-value="=" onClick={this.onClick}>=</button>
        </div>
      </div>
    );
  }
}
