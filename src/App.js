import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const pushButtonPlus = () => {
    setCount((prevcount) => prevcount + 1);
  };
  const pushButtonMinus = () => {
    // if (count > 0) {
    //   setCount((prevcount) => prevcount - 1);
    // }
    // setCount((prevcount) => (prevcount > 0 ? prevcount - 1 : 0));
    setCount((prevcount) => prevcount - 1);
  };

  const pushButtonReset = () => {
    setCount((prevcount) => (prevcount = 0));
  };

  return (
    <div className='App'>
      <p>{count}</p>
      <button onClick={pushButtonPlus}>これは＋ボタンです</button>
      <button onClick={pushButtonMinus} disabled={count === 0}>
        これはーボタンです
      </button>
      <button onClick={pushButtonReset}>これはリセットボタンです</button>
    </div>
  );
}

export default App;
