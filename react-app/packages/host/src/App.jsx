import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Counter from 'name/exposes'
import {Counter} from 'remote_counter/counter_button'
import { CounterDisplay } from 'remote_counter/counter_display'

function App() {
  const [count, setCount] = useState(0)
  const [isClick, setIsClick] = useState(false)

useEffect (() => {
  console.log("event listenr")
  window.addEventListener('remoteClickAction', (event) => {
    console.log("remoteClickAction", event.detail.count)
  });
}, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React (Host app)</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          ButtonFromHost: count is {count}, Hi. session 
        </button>
        <Counter label={"Remote1"} onButtonClick={(count) => console.log("count1",count)}/>
        <Counter label={"Remote2"} onButtonClick={(count) => console.log("count2",count)}/>
        <CounterDisplay></CounterDisplay>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
