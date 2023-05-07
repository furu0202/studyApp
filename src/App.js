import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [textData, setTextData] = useState([]);
  const pushButtonPlus = () => {
    setCount((prevcount) => prevcount + 1);
  };
  const pushButtonMinus = () => {
    setCount((prevcount) => prevcount - 1);
  };

  const pushButtonReset = () => {
    setCount((prevcount) => (prevcount = 0));
  };
  const [text, setText] = useState('');

  const [counter, setCounter] = useState(0);

  const addTodoButton = () => {
    setCounter((prevcount) => prevcount + 1);
    setTextData([text]);
  };

  const removeTodoButton = () => {
    setCounter((prevcount) => prevcount - 1);
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
      <input
        type='text'
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={addTodoButton}>追加する</button>
      <button onClick={removeTodoButton} disabled={counter === 0}>
        削除する
      </button>
      {textData.map((data) => (
        <p>{data}</p>
      ))}
    </div>
  );
}
export default App;
