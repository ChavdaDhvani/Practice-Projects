import { calculateInvestmentResults, formatter } from "../util/investment"

let resultSet = [];
export default function ResultTable({ input }) {
  resultSet = calculateInvestmentResults(input);

  const initialInvestment =
    resultSet[0].valueEndOfYear -
    resultSet[0].interest -
    resultSet[0].annualInvestment;

  return (

    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultSet.map((yearData) => {

          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment *
            yearData.year -
            initialInvestment;

          const totalAmoutInvested =
            yearData.valueEndOfYear -
            totalInterest;

          return (

            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmoutInvested)}</td>
            </tr>

          );
        })}

      </tbody>
    </table>
  )
}


