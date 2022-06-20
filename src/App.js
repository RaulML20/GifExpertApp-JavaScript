import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [ counter, setCounter ] = useState( 0 )

  const doSomething = (event) => {
      console.log(counter)
      setCounter( counter + 1);
  }

  const handleSubstract = () => setCounter( counter - 1 );
  const handlerReset = () => setCounter( 0 );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>{ counter }</h2>
        <button onClick={doSomething}>+1</button>
        <button onClick={handleSubstract}>-1</button>
        <button onClick={handlerReset}>Reset</button>
      </header>
    </div>
  );

  
}

export default App;
