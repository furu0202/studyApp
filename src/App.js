import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const pushButtonPlus = () => {
    setCount((prevcount) => prevcount + 1);
  };
  const pushButtonMinus = () => {
    setCount((prevcount) => prevcount - 1);
  };

  const pushButtonReset = () => {
    setCount((prevcount) => (prevcount = 0));
  };

  const [counter, setCounter] = useState(0);
  const textPushButtonPlus = () => {
    setCounter((prevcount) => prevcount + 2);
  };
  const textPushButtonMinus = () => {
    setCounter((prevcount) => prevcount - 2);
  };

  return (
    <div className='App'>
      <p>{count}</p>
      <button onClick={pushButtonPlus}>＋ボタン</button>
      <button onClick={pushButtonMinus} disabled={count === 0}>
        ーボタン
      </button>
      <button onClick={pushButtonReset}>リセットボタン</button>
      <p>現在の入力数は{counter}です</p>
      <input type='text'></input>
      <button onClick={textPushButtonPlus}>＋ボタン</button>
      <button onClick={textPushButtonMinus} disabled={counter === 0}>
        ーボタン
      </button>
    </div>
  );
}

export default App;
