import React from "react"
import PropTypes from "prop-types"
import languageContext from "./contexts/languageContext"
import stringModule from "./helpers/strings"

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */
const Congrats = props => {
  const language = React.useContext(languageContext)

  if (props.success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          {stringModule.getStringByLanguage(language, "congrats")}
        </span>
      </div>
    )
  } else {
    return <div data-test="component-congrats" />
  }
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}

const mapStateToProps = ({ success }) => {
  return { success }
}

export default Congrats
