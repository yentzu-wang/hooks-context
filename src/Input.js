import React from "react"
import PropTypes from "prop-types"

const Input = () => {
  const [currentGuess, setCurrentGuess] = React.useState("")

  return (
    <div data-test="component-input">
      <form clasName="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
        />
        <button data-test="submit-button" className="btn btn-parimary mb-2">
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
