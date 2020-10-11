import React from "react"
import { shallow } from "enzyme"
import Input from "./Input"
import { findByTestAttr } from "../test/testUtils"

const setup = () => {
  return shallow(<Input />)
}

test("Input renders without error", () => {
  const wrapper = setup()
  const inputComponent = findByTestAttr(wrapper, "component-input")
  expect(inputComponent.length).toBe(1)
})
