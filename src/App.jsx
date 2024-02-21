
import InvestmentCalculator from "./components/InvestmentCalculator"
import Result from "./components/Result";
import Header from "./components/Header";
import {calculateInvestmentResults} from "./util/investment"
import { useState } from "react";
function App() {
  const [values, setValues] = useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
  })

  function handleChange(inputIdentifier,newValue){
    setValues((prevValues)=>{
     return {...prevValues,[inputIdentifier]:+newValue}
    })
 }

 const inputIsValid = values.duration >=1;

  return (
    <><Header/> 
      <InvestmentCalculator userInput = {values} onChange ={handleChange}></InvestmentCalculator>
      {!inputIsValid && <p className="center">Please Enter a duration grater than zero</p>}
      {inputIsValid && <Result input = {values}></Result>}
        
    </>
  )
}

export default App
