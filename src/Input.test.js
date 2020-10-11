import React, { useState as useStateMock } from "react"
import { shallow } from "enzyme"
import Input from "./Input"
import { checkProps, findByTestAttr } from "../test/testUtils"

const setup = (secretWord = "party") => {
  return shallow(<Input secretWord={secretWord} />)
}

test("Input renders without error", () => {
  const wrapper = setup()
  const inputComponent = findByTestAttr(wrapper, "component-input")
  expect(inputComponent.length).toBe(1)
})

test("does not throw warning with expected props", () => {
  checkProps(Input, { secretWord: "party" })
})

describe("state controlled input field", () => {
  test("state updates with value of input box upon change", () => {
    const mockSetCurrentGuess = jest.fn()
    const useStateSpy = jest.spyOn(React, "useState")
    useStateSpy.mockImplementation(() => ["", mockSetCurrentGuess])

    const wrapper = setup()
    const inputBox = findByTestAttr(wrapper, "input-box")

    const mockEvent = { target: { value: "train" } }
    inputBox.simulate("change", mockEvent)

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train")
  })
})
