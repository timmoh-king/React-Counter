/**
 * @Author: Your name
 * @Date:   2022-07-11 23:11:48
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-07-14 08:13:46
 */
// import { render } from '@testing-library/react';
// import { render } from '@testing-library/react';
import './App.css';
import React, { Component } from 'react';
import Counters from './components/Counters';
import Navbar from './components/Navbar';

// function App() {
  
//   state = {
//     counters: [
//       { id: 1, value: 0 },
//       { id: 2, value: 0 },
//       { id: 3, value: 0 },
//       { id: 4, value: 0 },
//       { id: 5, value: 0 }
//     ],
//   };

//   handleDelete = (counterId) => {
//     const counters = this.state.counters.filter(c => c.id !== counterId);
//     this.setState({ counters })
//   }

//   handleIncreament = counter =>{
//     const counters = [...this.state.counters]
//     const index = counters.indexOf(counter)
//     counters[index] = {...counter}
//     counters[index].value++
//     this.setState ({counters})
//   }

//   handleReset =() => {
//     const counters = this.state.counters.map(c => {
//         c.value = 0;
//         return c;
//     })
//     this.setState({ counters })
//   }
  
//   return (
//     <div className="App">
//       <Navbar totalCounters={ this.state.counters.filter(c => c.value > 0).length } />
//       <main className='container'>
//         <Counters 
//           counters = {this.state.counters} 
//           onReset = {this.handleReset} 
//           onIncreament = {this.handleIncreament} 
//           onDelete = {this.handleDelete} 
//         />
//       </main>  
//     </div>
//   );
// }
 
// export default App ;

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters })
  }

  handleIncreament = counter =>{
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value++
    this.setState ({counters})
  }
  
  handleDecreament = counter =>{
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value--
    this.setState ({counters})
  }

  handleReset =() => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    })
    this.setState({ counters })
  }
  render() { 
    return (
      <div className="App">
      <Navbar totalCounters={ this.state.counters.filter(c => c.value > 0).length } />
      <main className='container'>
        <Counters 
          counters = {this.state.counters} 
          onReset = {this.handleReset} 
          onIncreament = {this.handleIncreament} 
          onDecreament = {this.handleDecreament} 
          onDelete = {this.handleDelete} 
        />
      </main>  
    </div>
    );
  }
}
 
export default App;