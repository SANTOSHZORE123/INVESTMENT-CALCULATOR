
import Form from "./Components/FormSubmit"
import Header from "./Components/Header"
import DetailPerYear from "./Components/DetailPerYear"
import { useState } from "react";
function App() {
  const [yearlyDatas,setYearlyData] = useState([]); // per-year results


  const newArrayHandler = ({CurrentSavings,yearlyContribution,expectedReturn,duration}) => {
    const yearlyData=[]
    console.log(CurrentSavings,yearlyContribution,expectedReturn,duration)
    let total_interest=0;
    let investment_caital=CurrentSavings
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = CurrentSavings * expectedReturn;
      total_interest+=yearlyInterest;
      investment_caital+=yearlyContribution
      CurrentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        savingsEndOfYear:CurrentSavings,
        yearlyInterest:yearlyInterest,
        total_interest:total_interest,
        total_investment:investment_caital
      });
    }

    // do something with yearlyData ...
    setYearlyData(yearlyData)
  };

  return (
    <div>
      <Header/>
      <Form onSaveForm={newArrayHandler}/>
      
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <DetailPerYear yearlyDatas={yearlyDatas}/>
    </div>
  );
}

export default App;
