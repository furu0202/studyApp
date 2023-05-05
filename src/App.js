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

  return (
    <div className='App'>
      <p>{count}</p>
      <button onClick={pushButtonPlus}>＋ボタン</button>
      <button onClick={pushButtonMinus} disabled={count === 0}>
        ーボタン
      </button>
      <button onClick={pushButtonReset}>リセットボタン</button>
      <p>テキストフォーム</p>
      <input type='text'></input>
    </div>
  );
}

export default App;
