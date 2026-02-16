import Header from "./components/Header"
import UserInput from "./components/UserInput"
import ResultTable from "./components/ResultTable"
import { useState } from 'react'

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIndentifier, newValue) {

    setUserInput(preValue => {

      return {
        ...preValue,
        [inputIndentifier]: +newValue
      }
    })
  }
  return (
    <>

      <Header />

      <UserInput
        userInput={userInput}
        onChangeInput={handleChange} />

      {!inputIsValid && <h3 id="invalid">Please enter duration greater than zero.</h3>}
      {inputIsValid && <ResultTable input={userInput} />}

    </>
  )
}

export default App
