import * as React from "react";
import InvestmentForm from "./../InvestmentForm/InvestmentForm";
import InvestmentList from "../InvestmentList/InvestmentList";
import Fallback from "../Fallback/Fallback";

const Investments: React.FC<any> = () => {
  const [yearlyData, setYearlyData] = React.useState(null);
  const newData = [];

  const submitHandler = (yearlyData: any) => {
    setYearlyData(yearlyData);
  }

  if (yearlyData) {
    let currentSavings = +yearlyData["current-savings"];
    const yearlyContribution = +yearlyData["yearly-contribution"];
    const expectedReturn = +yearlyData["expected-return"] / 100;
    const duration = +yearlyData["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      newData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      })
    }
  }
  return (
    <>
      <InvestmentForm submitHandler={submitHandler} />
      {yearlyData === null && <Fallback />}
      {yearlyData !== null && (
        <InvestmentList
          yearlyData={newData}
          initialInvestment={yearlyData["current-savings"]}
        />
      )}
    </>
  );
};

export default Investments;
