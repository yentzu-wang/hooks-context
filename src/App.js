import React from "react"
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

  return <div data-test="component-app" />
}

export default App
