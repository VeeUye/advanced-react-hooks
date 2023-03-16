// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
import {useReducer} from 'react'


const countReducer = (state, action) => { //action is the value that's passed to the dispqtch function
  return { ...state, ...action} // returns the state combined with the action
}
  function Counter({initialCount = 0, step = 1}) {

    const [state, setState] = useReducer(countReducer, {count: initialCount})
    const { count } = state

  const increment = () => setState({ count: count + step })  //setState is the dispatch function

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
