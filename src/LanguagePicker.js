import React from "react"
import PropTypes from "prop-types"

const LanguagePicker = ({ setLanguage }) => {
  return <div data-test="component-language-picker">LanguagePicker</div>
}

LanguagePicker.propTypes = {
  setLanguage: PropTypes.func.isRequired
}

export default LanguagePicker
