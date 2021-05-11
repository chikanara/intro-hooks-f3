
import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Login from './components/Login';

function App() {
  const [isShow, setIsShow] = useState(false);
  const handleClick = () => {
    setIsShow(!isShow)
  }
  return (
    <div className="App">
      <h1>Intro hooks</h1>
      <Login/>
      <button onClick={handleClick}>{isShow ? "Hide" : "Show"}</button>
          {
            isShow ? <Counter/> : "Click on the button to show the counter"
          }
    </div>
  );
}

export default App;
