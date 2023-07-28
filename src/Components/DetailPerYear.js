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
        <td>{element.savingsEndOfYear}</td>
        <td>{element.yearlyInterest}</td>
        <td>{element.total_interest}</td>
        <td>{element.total_investment}</td>
      </tr>
    })}
 </tbody>
</table>
}

export default DetailPerYear