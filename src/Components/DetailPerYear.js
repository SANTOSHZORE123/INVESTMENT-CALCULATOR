const Formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const DetailPerYear=(props)=>{
   return <table className="result">
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
 {props.yearlyDatas.map((element,index)=>{
      return <tr key={element.year}>
        <td>{element.year}</td>
        <td>{Formatter.format(element.savingsEndOfYear)}</td>
        <td>{Formatter.format(element.yearlyInterest)}</td>
        <td>{Formatter.format(element.total_interest)}</td>
        <td>{Formatter.format(element.total_investment)}</td>
      </tr>
    })}
 </tbody>
</table>
}

export default DetailPerYear