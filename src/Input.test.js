import React from "react"
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
