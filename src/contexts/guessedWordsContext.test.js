import React from "react"
import { shallow, mount } from "enzyme"
import guessedWordsContext from "./guessedWordsContext"

const FunctionComponent = () => {
  guessedWordsContext.useGuessedWords()

  return <div />
}

test("useGuessedWords throws error when not wrapped in GuessedWordsProvider", () => {
  expect(() => {
    shallow(<FunctionComponent />)
  }).toThrow("useGuessedWords must be used within a GuessedWordsProvider")
})

test("useGuessedWords doesn not throw error when wrapped in GuessedWordsProvider", () => {
  expect(() => {
    mount(
      <guessedWordsContext.GuessedWordsProvider>
        <FunctionComponent />
      </guessedWordsContext.GuessedWordsProvider>
    )
  }).not.toThrow()
})
