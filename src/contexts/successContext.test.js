import React from "react"
import { shallow, mount } from "enzyme"
import successContext from "./successContext"

const FunctionComponent = () => {
  successContext.useSuccess()

  return <div />
}

test("useSuccess throws error when not wrapped in SuccessProvicer", () => {
  expect(() => {
    shallow(<FunctionComponent />)
  }).toThrow("useSuccess must be used within a SuccessProvider")
})

test("useSuccess doesn not throw error when wrapped in SuccessProvider", () => {
  expect(() => {
    mount(
      <successContext.SuccessProvider>
        <FunctionComponent />
      </successContext.SuccessProvider>
    )
  }).not.toThrow()
})
