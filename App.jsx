import './App.css';
import { Form } from "./components/Form"
import { Form as FormClass } from "./class-components/Form"
import { Count as CountClass } from './class-components/Count'
import { Count } from './components/Count'
import { Message } from './components/Message/Message'
import { Child } from './components/Child'
import { useState } from 'react'

export const App = () => {
  const [name, setName] = useState('geek')
  const [count, setCount] = useState('0')
  // const [arr, setArr] = useState(['ivanov', 'petrov', 'sidorov'])
  const arr =  ['ivanov', 'petrov', 'sidorov']


  const handlChangeName = (ev) => {
    setName(ev.target.value)
  }

  return (
    <div className="App">
      <h2 style={{color: 'blue'}}>Class components</h2>
      <CountClass count={10} />
      <hr />
      <FormClass />
      <hr />
      <h2>Func components</h2>
      <Count name='geekbrains' />
      <hr />
      <h3>Parent component</h3>
      <p>{count}</p>
      <input onChange={handlChangeName} />
      <h3>Child component</h3>
      <Child name={name} handlChangeCount={setCount} />
      {arr.map((item, idx)=> <div key={idx}>{item}</div>)}
      <hr />
      <Message text='Hello world!' />

    </div>
  );
}

export default App;
