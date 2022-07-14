/**
 * @Author: Your name
 * @Date:   2022-07-11 23:15:14
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-07-14 05:33:49
 */
import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
    
  render() {
    const { onReset, counters, onDelete, onIncreament } = this.props;
    
    return (
      <div>
        <button onClick ={onReset} className="btn btn-primary btn-small m-2">Reset</button>
          {counters.map((counter) => (
            <Counter 
            key={counter.id} 
            onDelete={this.props.onDelete} 
            onIncreament={this.props.onIncreament} 
            onDecreament={this.props.onDecreament} 
            counter={ counter } />
          ))}
      </div>
    );
  }
}

export default Counters;
