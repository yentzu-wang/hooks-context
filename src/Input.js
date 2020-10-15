import React from "react"
import PropTypes from "prop-types"
import languageContext from "./contexts/languageContext"
import successContext from "./contexts/successContext"
import stringModule from "./helpers/strings"

const Input = ({ secretWord }) => {
  const language = React.useContext(languageContext)
  const [success, setSuccess] = successContext.useSuccess()
  const [currentGuess, setCurrentGuess] = React.useState("")

  if (success) {
    return null
  }

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder={stringModule.getStringByLanguage(
            language,
            "guessInputPlaceholder"
          )}
          value={currentGuess}
          onChange={e => setCurrentGuess(e.target.value)}
        />
        <button
          data-test="submit-button"
          className="btn btn-parimary mb-2"
          onClick={e => {
            e.preventDefault()
            // TODO: update guessedWords
            // check against secretWord and update success if needed
            if (currentGuess === secretWord) {
              setSuccess(true)
            }

            // clear input box
            setCurrentGuess("")
          }}
        >
          {stringModule.getStringByLanguage(language, "submit")}
        </button>
      </form>
    </div>
  )
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
}

export default Input
