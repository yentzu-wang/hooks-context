import React from "react"
import Input from "./Input"
import LanguagePicker from "./LanguagePicker"
import Congrats from "./Congrats"
import GuessedWords from "./GuessedWords"
import hookActions from "./actions/hookActions"
import languageContext from "./contexts/languageContext"
import successContext from "./contexts/successContext"
import guessedWordsContext from "./contexts/guessedWordsContext"

import "./App.css"

function reducer(state, action) {
  switch (action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload }
    case "setLanguage":
      return { ...state, language: action.payload }
    default:
      throw new Error(`Invalid action type: ${action.type}`)
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    secretWord: null,
    language: "en"
  })

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord)
  }, [])

  const setSecretWord = secretWord =>
    dispatch({ type: "setSecretWord", payload: secretWord })

  const setLanguage = language =>
    dispatch({ type: "setLanguage", payload: language })

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
      <h1>Jotto</h1>
      <languageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage} />
        <guessedWordsContext.GuessedWordsProvider>
          <successContext.SuccessProvider>
            <Congrats />
            <Input secretWord={state.secretWord} />
          </successContext.SuccessProvider>
          <GuessedWords />
        </guessedWordsContext.GuessedWordsProvider>
      </languageContext.Provider>
    </div>
  )
}

export default App
