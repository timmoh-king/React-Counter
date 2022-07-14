/**
 * @Author: Your name
 * @Date:   2022-07-11 23:13:11
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-07-14 08:12:40
 */
import React, { Component } from 'react';

class Counter extends Component {
    
    formatCount(){
        const { value: count } = this.props.counter;
        return count === 0 ?'Zero' : count;
     }
     
    render() { 
        let classes = "text-dark badge m-2 badge-";
        classes += (this.props.counter. value === 0) ? "warning" : "primary"; 
        
        return (
            <div className='row'>
                <div className='col-1'>
                    <span className = {classes}>{this.formatCount()}</span>
                </div>
                <div className='col align-start'>
                    <button 
                        onClick={()=>this.props.onIncreament(this.props.counter)} 
                        className='btn btn-sm btn-secondary'>+
                    </button>
                    <button 
                        onClick={()=>this.props.onDecreament(this.props.counter)} 
                        className='btn btn-sm btn-secondary m-2'
                        disabled = {this.props.counter.value === 0 ? 'disabled' : ''}>-
                    </button>
                    <button 
                        onClick={()=> this.props.onDelete(this.props.counter.id)} 
                        className='btn btn-danger btn-sm m-2'>Delete
                    </button>
                </div>
            </div>
        );
    }
}
 
export default Counter;