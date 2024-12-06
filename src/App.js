import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  function addOne() {
    setCount(count + 1);
  }

  function minusOne() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Ok!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br></br>
        <div>
          <button className='button' onClick={addOne}>+</button>
          <button className='button' onClick={minusOne}>-</button>
          <button className='button' onClick={resetCount}>Reset</button>
        </div>
        <div className='count'>Count: {count}</div>
      </header>
    </div>
  );
}

export default App;
