// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
import {useReducer} from 'react'


const countReducer = (state, action) => { //action is the value that's passed to the dispqtch function
  // set state with either a function callback or an object
  return  {
    ...state,
    ...(typeof action === 'function' ? action(state) : action),
  }
}
  function Counter({initialCount = 0, step = 1}) {

    const [state, setState] = useReducer(countReducer, {count: initialCount})
    const { count } = state

    const increment = () =>
        //setState is the dispatch function
        setState(currentState => ({count: currentState.count + step}))

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
