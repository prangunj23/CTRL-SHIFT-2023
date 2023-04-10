import React,{useState, useEffect} from 'react';
import './pages.css';

function Calculator() {
  const [calcOutput, setCalcOutput] = useState("");
  const [newEquation, setNewEquation] = useState(false);
  const [operation, setOperation] = useState("");
  const [currentSum,setCurrentSum]=useState(0);
  const [clear,setClear]=useState(false);
  let firstVal = 0;
  let secondVal = 0;

  useEffect(() => {
    console.log(calcOutput);
  }, [newEquation]);

  /*useEffect(()=>{
    document.querySelector('#result').value="";
  },[])
  
  useEffect(()=>{
    if(clear)
    document.querySelector('#result').value="";
  })

  const Add=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let currentNum=document.querySelector('#num').value
    if(currentNum=='')
    return;
    let sum= currentSum+parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector('#num').value="";
      
  }

  const Clear=(e)=>{
    e.preventDefault();
    console.log('sum:', currentSum);
    document.querySelector('form').reset();
    setClear(true);
    setCurrentSum(0);
  }*/

  const updateOutput = (char) => {
    console.log(char);
    console.log(calcOutput.length);
    if(calcOutput.length >= 15)
      return;
    
    if(char === '' || newEquation){
      setCalcOutput(char);
      setNewEquation(false);
    } else {
      setCalcOutput(calcOutput + char);
    }
  }

  /*const operate = (operationChar) => {
    firstVal = calcOutput;
    setOperation(operationChar);
    setCalcOutput("");
  }*/

  const calculate = () => {
    /*secondVal = calcOutput;
    console.log(operation);
    let answer = 0;
    switch(operation){
      case '+': answer = firstVal + secondVal; break;
      case '-': answer = firstVal - secondVal; break;
      case '*': answer = firstVal * secondVal; break;
      case '/': answer = firstVal / secondVal; break;
      default: console.log("calculator operator error");
    }
    //setNewEquation(true);
    let answerString = answer.toString().substring(0, 15);
    setCalcOutput(answerString);
    console.log(firstVal);
    console.log(secondVal);
    console.log(answerString);
    console.log(calcOutput);*/
    if(['/', '*', '+', '-', ''].includes(calcOutput.charAt(calcOutput.length - 1)))
      return;
    setCalcOutput(eval(calcOutput));
    setNewEquation(true);
  }

  return (
    <div className="calculator-wrapper">
      <h3 className="calculator-title">Use this calculator tool to help you along your problem-solving journey!</h3>
      <section className="flex-break"></section>
      <div className="calculator">
        <h3 className="calculator-output">{calcOutput}</h3>
        <form className="calculator-buttons">
          <input type = "button" value = "7" onClick={() => updateOutput('7')} />  
          <input type = "button" value = "8" onClick={() => updateOutput('8')} />  
          <input type = "button" value = "9" onClick={() => updateOutput('9')} />  
          <input type = "button" value = "/" onClick={() => updateOutput('/')} />

          <input type = "button" value = "6" onClick={() => updateOutput('6')} />  
          <input type = "button" value = "5" onClick={() => updateOutput('5')} />  
          <input type = "button" value = "4" onClick={() => updateOutput('4')} />  
          <input type = "button" value = "*" onClick={() => updateOutput('*')} /> 

          <input type = "button" value = "3" onClick={() => updateOutput('3')} />  
          <input type = "button" value = "2" onClick={() => updateOutput('2')} />  
          <input type = "button" value = "1" onClick={() => updateOutput('1')} />  
          <input type = "button" value = "-" onClick={() => updateOutput('-')} /> 

          <input type = "button" value = "C" onClick={() => updateOutput('')} />  
          <input type = "button" value = "0" onClick={() => updateOutput('0')} />  
          <input type = "button" value = "=" onClick={() => calculate()} />  
          <input type = "button" value = "+" onClick={() => updateOutput('+')} />   
        </form>
      </div>
    </div>
  );
}
export default Calculator;