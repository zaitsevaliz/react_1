

import { Message } from './components/Message';

import { useState } from 'react'

export const App = () => {
  const [text, changeText] = useState('default message')
  const handleChangeName = (ev) => {
    changeText(ev.target.value)
  }
  return (
    <div className="App">
      <h3>App.js:</h3>
      <input onChange={handleChangeName}></input>

      <Message text={text} />
    </div>
  );
}


