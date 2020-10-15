import React from "react"
import { mount } from "enzyme"
import Input from "./Input"
import languageContext from "./contexts/languageContext"
import successContext from "./contexts/successContext"
import guessedWordsContext from "./contexts/guessedWordsContext"
import { checkProps, findByTestAttr } from "../test/testUtils"

const setup = ({ language = "en", secretWord = "party", success = false }) => {
  return mount(
    <languageContext.Provider value={language}>
      <successContext.SuccessProvider value={[success, jest.fn()]}>
        <guessedWordsContext.GuessedWordsProvider>
          <Input secretWord={secretWord} />
        </guessedWordsContext.GuessedWordsProvider>
      </successContext.SuccessProvider>
    </languageContext.Provider>
  )
}

test("Input renders without error", () => {
  const wrapper = setup({})
  const inputComponent = findByTestAttr(wrapper, "component-input")
  expect(inputComponent.length).toBe(1)
})

test("does not throw warning with expected props", () => {
  checkProps(Input, { secretWord: "party" })
})

describe("state controlled input field", () => {
  const mockSetCurrentGuess = jest.fn()
  let wrapper

  beforeEach(() => {
    mockSetCurrentGuess.mockClear()
    React.useState = jest.fn(() => ["", mockSetCurrentGuess])
    wrapper = setup({})
  })

  test("state updates with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box")

    const mockEvent = { target: { value: "train" } }
    inputBox.simulate("change", mockEvent)

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train")
  })

  test("field is cleared upon submit button click", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button")

    submitButton.simulate("click", { preventDefault: jest.fn() })
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("")
  })
})

describe("languagePicker", () => {
  test("correctly renders submit string in english", () => {
    const wrapper = setup({ language: "en" })
    const submitButton = findByTestAttr(wrapper, "submit-button")
    expect(submitButton.text()).toBe("Submit")
  })

  test("correctly renders congrats string in emoji", () => {
    const wrapper = setup({ language: "emoji" })
    const submitButton = findByTestAttr(wrapper, "submit-button")
    expect(submitButton.text()).toBe("🚀")
  })
})

test("input component does not show when success is true", () => {
  const wrapper = setup({ secretWord: "party", success: true })
  expect(wrapper.isEmptyRender()).toBe(true)
})
