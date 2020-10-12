import React from "react"
import PropTypes from "prop-types"

const Input = () => {
  const [currentGuess, setCurrentGuess] = React.useState("")

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
          value={currentGuess}
          onChange={e => setCurrentGuess(e.target.value)}
        />
        <button
          data-test="submit-button"
          className="btn btn-parimary mb-2"
          onClick={e => {
            e.preventDefault()
            // TODO: update guessedWords
            // TODO: check against secretWord and update success if needed
            setCurrentGuess("")
          }}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
}

export default Input
