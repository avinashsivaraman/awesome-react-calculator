import React from 'react';
import PropTypes from 'prop-types';

export const replacement = [
  {
    reg: /\*/g,
    dest: '×'
  }, {
    reg: /\//g,
    dest: '÷'
  }
];


export default class ResultPanel extends React.Component {
  static propTypes = {
    last: PropTypes.string,
    cur: PropTypes.string,
    onInputChange: PropTypes.func
  };
  static defaultProps = {
    curr: '0',
    last: ''
  };

  render() {
    const {last, cur} = this.props;
    let finalCur = cur, finalLast = last;
    replacement.forEach((item) => {
      finalCur = finalCur.replace(item.reg, item.dest);
      finalLast = finalLast.replace(item.reg, item.dest);
    });

    return (
      <div className="result-panel">
        <div className="last-row">{finalLast}</div>
        <input className="cur-row" value={finalCur} readOnly />
      </div>
    );
  }
}
