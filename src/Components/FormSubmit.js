import { useState } from "react";
import "./Form.css"
const FormSubmit=(props)=>{

  const [error,setError]=useState({
    currsave:"",
    ycon:"",
    expected:"",
    dur:""
  })
  const [CurrentSavings,setcurrntsavings]=useState("")
  const [yearlyContribution,setYearlyContri]=useState("")
  const [expectedReturn,setExpectedReturn]=useState("")
  const [duration,setDuration]=useState("")
  const currSaveHandler=(event)=>{
    setcurrntsavings(event.target.value.trim())
     if(event.target.value.trim().length>0){
      setError(prev=>{
        return {...prev,currsave:""}
      })
    }
    
  }
  const yearSaveHandler=(event)=>{
    setYearlyContri(event.target.value.trim())
    if(event.target.value.trim().length>0){
      setError(prev=>{
        return {...prev,ycon:""}
      })
    }
  }
  const durationHandler=(event)=>{
    setDuration(event.target.value.trim())
    if(event.target.value.trim().length>0){
      setError(prev=>{
        return {...prev,dur:""}
      })
    }

  }
  const returnHandler=(event)=>{
    setExpectedReturn(event.target.value.trim())
    if(event.target.value.trim().length>0){
      setError(prev=>{
        return {...prev,expected:""}
      })
    }
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    if(CurrentSavings.length>0&&yearlyContribution.length>0&&expectedReturn.length>0&&duration.length>0){
      const finalUserResponse={
        CurrentSavings:+CurrentSavings,
        yearlyContribution:+yearlyContribution,
        expectedReturn:+expectedReturn/100,
        duration:+duration
      }
      // console.log(finalUserResponse)
      props.onSaveForm(finalUserResponse)
    }else{
      if(CurrentSavings.length===0){
      setError(prev=>{
        return {...prev,currsave:'Enter valid currentsaving'}
      })
    }
    if(yearlyContribution.length===0){
      setError(prev=>{
        return {...prev,ycon:'Enter valid yearly contribution'}
      })
    }
    if(expectedReturn.length===0){
      setError(prev=>{
        return {...prev,expected:'Enter valid interest'}
      })
    }
    if(duration.length===0){
      setError(prev=>{
        return {...prev,dur:'Enter valid duration'}
      })
    }
    }
    setDuration('')
    setExpectedReturn('')
    setYearlyContri('')
    setcurrntsavings('')
  }
    return <form className="form" onSubmit={submitHandler}>
    <div className="input-group">
      <p>
        <label htmlFor="current-savings">Current Savings ($) <span style={{color:'red'}}>*</span></label>
        <input type="number" value={CurrentSavings}id="current-savings" onChange={currSaveHandler} />
        {error.currsave.length>0&&<p style={{color:'red'}}>{error.currsave}</p>}
      </p>
      <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($) <span style={{color:'red'}}>*</span></label>
        <input type="number" value={yearlyContribution}id="yearly-contribution" onChange={yearSaveHandler}/>
        {error.ycon.length>0&&<p style={{color:'red'}}>{error.ycon}</p>}
      </p>
    </div>
    <div className="input-group">
      <p>
        <label htmlFor="expected-return">
          Expected Interest (%, per year) <span style={{color:'red'}}>*</span>
        </label>
        <input type="number"value={expectedReturn} id="expected-return"onChange={returnHandler} />
        {error.expected.length>0&&<p style={{color:'red'}}>{error.expected}</p>}
      </p>
      <p>
        <label htmlFor="duration">Investment Duration (years) <span style={{color:'red'}}>*</span></label>
        <input type="number" id="duration" value={duration}onChange={durationHandler}/>
        {error.dur.length>0&&<p style={{color:'red'}}>{error.dur}</p>}
      </p>
    </div>
    <p className="actions">
      <button type="reset" className="buttonAlt">
        Reset
      </button>
      <button type="submit" className="button">
        Calculate
      </button>
    </p>
  </form>

}
export default FormSubmit;