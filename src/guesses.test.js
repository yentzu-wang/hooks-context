import React from "react"
import { mount } from "enzyme"
import Input from "./Input"
import successContext from "./contexts/successContext"
import { findByTestAttr } from "../test/testUtils"

function setup(secretWord = "party") {
  const wrapper = mount(
    <successContext.SuccessProvider>
      <Input secretWord={secretWord} />
    </successContext.SuccessProvider>
  )

  const inputBox = findByTestAttr(wrapper, "input-box")
  const submitButton = findByTestAttr(wrapper, "submit-button")

  return [wrapper, inputBox, submitButton]
}

describe("test word guesses", () => {
  let wrapper
  let inputBox
  let submitButton

  beforeEach(() => {
    ;[wrapper, inputBox, submitButton] = setup("party")
  })

  describe("correct guess", () => {
    beforeEach(() => {
      const mockEvent = { target: { value: "party" } }
      inputBox.simulate("change", mockEvent)
      submitButton.simulate("click")
    })
  })

  describe("incorrect guess", () => {})
})
