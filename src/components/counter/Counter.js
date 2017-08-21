/* @flow */

import React, {Component} from 'react';

type Props = {
  title?: string,
  text?: string,
  'class'?: Object,
  sheet: Object
};

class Counter extends Component{
  render(){
    const {increment, decrement, isOdd, count} = this.props;

    return  <div>
      Counter:
      <div>
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
      </div>
      <span className={isOdd ? 'Counter-odd' : 'Counter-even'}> {count} </span>
    </div>
  }
}

export default Counter;
