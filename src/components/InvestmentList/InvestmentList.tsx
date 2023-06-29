import * as React from "react";
import styles from "./InvestmentList.module.css";

type InvestmentListProps = {
  yearlyData: any;
  initialInvestment: number;
};

const InvestmentList: React.FC<InvestmentListProps> = (
  props: InvestmentListProps
) => {
  return (
    <>
      <table className={styles["result"]}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.yearlyData.map((data: any) => (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{data.savingsEndOfYear}</td>
              <td>{data.yearlyInterest}</td>
              <td>{data.savingsEndOfYear - props.initialInvestment - data.yearlyContribution * data.year}</td>
              <td>{props.initialInvestment + data.yearlyContribution * data.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default InvestmentList;
