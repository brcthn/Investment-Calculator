import {calculateInvestmentResults, formatter} from "../util/investment"
export default function Result({input}){
    const resultsData = calculateInvestmentResults(input);
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].annualInvestment * resultsData[0].year;
    console.log(resultsData)


    
    return(
        <div>
           <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest(Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {resultsData.map((item) => {
                        const totalInterest = item.valueEndOfYear - item.annualInvestment * item.year - initialInvestment;
                        const totalAmountInvestment = item.valueEndOfYear - totalInterest;
                        return(
                            <tr key={item.year}>
                                <td>{item.year}</td>   
                                <td>{formatter.format(item.valueEndOfYear)}</td>
                                <td>{formatter.format(item.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(totalAmountInvestment)}</td>
                            </tr>
                        )
                       
                    })}
                </tbody>
           </table>
        </div>
    )
}