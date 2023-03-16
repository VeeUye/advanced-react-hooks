// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
import {useReducer} from 'react'


const countReducer = (count, step) => {
  return count + step
}
  function Counter({initialCount = 0, step = 1}) {

  const [count, changeCount] = useReducer(countReducer, initialCount)

  const increment = () => changeCount(step)

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
