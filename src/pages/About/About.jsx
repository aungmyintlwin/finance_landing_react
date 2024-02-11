import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import './Home.css'
import { useNavigate } from 'react-router-dom'

function About() {
  const [count, setCount] = useState(0)
  const navigation = useNavigate();
  const go = () => {
    navigation('/')
  }

  return (
    <>
      <div>
        <a href="https://react.dev">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <button onClick={go}>
          Go To Home
        </button>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
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

export default About
