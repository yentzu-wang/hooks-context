import React from "react"
import Input from "./Input"
import hookActions from "./actions/hookActions"

import "./App.css"

function reducer(state, action) {
  switch (action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload }
    default:
      throw new Error(`Invalid action type: ${action.type}`)
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    secretWord: null
  })

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord)
  }, [])

  const setSecretWord = secretWord =>
    dispatch({ type: "setSecretWord", payload: secretWord })

  if (!state.secretWord) {
    return (
      <div className="container" data-test="spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="container" data-test="component-app">
      <Input secretWord={state.secretWord} />
    </div>
  )
}

export default App
