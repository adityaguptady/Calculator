import { useState } from "react";
import './App.css';
import MyButton from "./Component/MyButton";

function App() 
{
  const [result,setResult] = useState(0)
  const [operand1,setOperand1] = useState(0)
  const [lastOperand,setLastOperand] = useState(0)
  
  const updateResult = (action) =>
  {
    switch (action) 
    {
      case "1":
      {
        //console.log(action)
        let tempResult =0
        if(result===0)
        {
          tempResult=action
        }
        else
        {
          if(lastOperand != "" && operand1 != result)
          {
            tempResult = result + action
          }
          else if(lastOperand != "")
          {
            setOperand1(result)
            tempResult= action
          }
          else
          {
            tempResult = result + action
          }
        }
        setResult(tempResult)
        break;
      }
      case "2": // action === 1
      {
        //console.log(action)
        let tempResult =0
        if(result===0)
        {
          tempResult=action
        }
        else
        {
          if(lastOperand != "" && operand1 != result)
          {
            tempResult = result + action
          }
          else if(lastOperand != "")
          {
            setOperand1(result)
            tempResult=action
          }
          else
          {
            tempResult = result + action
          }
        }
        setResult(tempResult)
        break;
      }
      case "3":
      {
        console.log(action)
        let tempResult =0
        if(result===0)
        {
          tempResult=action
        }
        else
        {
          if(lastOperand != "" && operand1 != result)
          {
            tempResult = result + action
          }
          else if(lastOperand != "")
          {
            setOperand1(result)
            tempResult=action
          }
          else
          {            
            tempResult = result + action
          }
        }
        setResult(tempResult)
        break;
      }
      case "4":
      {
        console.log(action)
        let tempResult =0
        if(result===0)
        {
          tempResult=action
        }
        else
        {
          if(lastOperand != "" && operand1 != result)
          {
            tempResult = result + action
          }
          else if(lastOperand != "")
          {
            setOperand1(result)
            tempResult=action
          }
          else
          {
            tempResult = result + action
          }
        }
        setResult(tempResult)
        break;
      }
      case "5":
      {
        console.log(action)
        let tempResult =0
        if(result===0)
        {
          tempResult=action
        }
        else
        {
          if(lastOperand != "" && operand1 != result)
          {
            tempResult = result + action
          }
          else if(lastOperand != "")
          {
            setOperand1(result)
            tempResult=action
          }
          else
          {
            tempResult = result + action
          }
        }
        setResult(tempResult)
        break;
      }
      case "6":
      {
        console.log(action)
        let tempResult =0
        if(result===0)
        {
          tempResult=action
        }
        else
        {
          if(lastOperand != "" && operand1 != result)
          {
            tempResult = result + action
          }
          else if(lastOperand != "")
          {
            setOperand1(result)
            tempResult=action
          }
          else
          {
            tempResult = result + action
          }
        }
        setResult(tempResult)
        break;
      }
      case "7":
      {
        console.log(action)
        let tempResult =0
        if(result===0)
        {
          tempResult=action
        }
        else
        {
          if(lastOperand != "" && operand1 != result)
          {
            tempResult = result + action
          }
          else if(lastOperand != "")
          {
            setOperand1(result)
            tempResult=action
          }
          else
          {
            tempResult = result + action
          }
        }
        setResult(tempResult)
        break;
      }
      case "8":
      {
        console.log(action)
        let tempResult =0
        if(result===0)
        {
          tempResult=action
        }
        else
        {
          if(lastOperand != "" && operand1 != result)
          {
            tempResult = result + action
          }
          else if(lastOperand != "")
          {
            setOperand1(result)
            tempResult=action
          }
          else
          {
            tempResult = result + action
          }
        }
        setResult(tempResult)
        break;
      }
      case "9":
      {
        console.log(action)
        let tempResult =0
        if(result===0)
        {
          tempResult=action
        }
        else
        {
          if(lastOperand != "" && operand1 != result)
          {
            tempResult = result + action
          }
          else if(lastOperand != "")
          {
            setOperand1(result)
            tempResult=action
          }
          else
          {
            tempResult = result + action
          }
        }
        setResult(tempResult)
        break;
      }
      case "0":
      {
        console.log(action)
        let tempResult =0
        if(result!=0)
        {
          if(lastOperand != "" && operand1 != result)
          {
            tempResult = result + action
          }
          else if(lastOperand != "")
          {
            setOperand1(result)
            tempResult=action
          }
          else
          {
            tempResult = result + action
            setResult(tempResult)
          }
        }
        break;
      }
      case "+":
      {
        if(result != 0)
        {
          if(operand1 === 0)
          {
            setOperand1(result)
          }
          else
          {
            switch(lastOperand)
            {
              case "-":
                setResult(parseInt(operand1) - parseInt(result))
                setOperand1(parseInt(operand1) - parseInt(result))
                break;
              case "+":
                setResult(parseInt(result) + parseInt(operand1)) // 0
                setOperand1(parseInt(result) + parseInt(operand1)) // 0
                break;
              case "x":
                setResult(parseInt(result) * parseInt(operand1)) // 0
                setOperand1(parseInt(result) * parseInt(operand1)) // 0
                break;
              case "/":
                setResult(parseInt(operand1) / parseInt(result)) // 0
                setOperand1(parseInt(operand1) / parseInt(result)) // 0
                break;
              default:
            }
            setOperand1(0)
            //setResult(0)
          }
        }
        setLastOperand("+")
        break;
      }
      case "-":
      {
        if(result != 0)
        {
          if (operand1 === 0)
          {
            setOperand1(result)
          }
          else
          {
            switch(lastOperand)
            {
              case "-":
                setResult(parseInt(operand1) - parseInt(result))
                setOperand1(parseInt(operand1) - parseInt(result))
                break;
              case "+":
                setResult(parseInt(result) + parseInt(operand1)) // 0
                break;
              case "x":
                setResult(parseInt(result) * parseInt(operand1)) // 0
                break;
              case "/":
                setResult(parseInt(operand1) / parseInt(result)) // 0
                break;
              default:
            }
            //setResult (0)
          }
        }
        setLastOperand("-")
        break;
      }
      case "x":
      {
        if(result != 0)
        {
          if (operand1 === 0)
          {
            setOperand1(result)
          }
          else
          {
            switch(lastOperand)
            {
              case "-":
                setResult(parseInt(operand1) - parseInt(result))
                break;
              case "+":
                setResult(parseInt(result) + parseInt(operand1)) // 0
                break;
              case "x":
                setResult(parseInt(result) * parseInt(operand1)) // 0
                break;
              case "/":
                setResult(parseInt(operand1) / parseInt(result)) // 0
                break;
              default:
            }
            //setResult(0)
          }
          
        }
        setLastOperand("x")
        break;
      }
      case "/":
      {
        if(result != 0)
        {
          if (operand1 === 0)
          {
            setOperand1(result)
          }
          else
          {
            switch(lastOperand)
            {
              case "-":
                setResult(parseInt(operand1) - parseInt(result))
                break;
              case "+":
                setResult(parseInt(result) + parseInt(operand1)) // 0
                break;
              case "x":
                setResult(parseInt(result) * parseInt(operand1)) // 0
                break;
              case "/":
                setResult(parseInt(operand1) / parseInt(result)) // 0
                break;
              default:
            }
            //setResult(0)
          }
        }
        setLastOperand("/")
        break;
      }
      case "=":
      {
        switch(lastOperand)
        {
          case "-":
            setResult(parseInt(operand1) - parseInt(result))
            break;
          case "+":
            setResult(parseInt(result) + parseInt(operand1)) // 0
            break;
          case "x":
            setResult(parseInt(result) * parseInt(operand1)) // 0
            break;
          case "/":
            setResult(parseInt(operand1) / parseInt(result)) // 0
            break;
          default:
        }
        setOperand1(0)
        setLastOperand("")

        break;
      }
      case "clear":
      {
        setResult(0)
        setOperand1(0)
        setLastOperand("")
        break;
      }
      default:
        break;
    }
  }

  const checkState = () =>
  {
    console.log("result: "+result)
    console.log("operand1: "+operand1)
  }

  console.log("--------------------")

  //let myArray = [1, 2, "three", true, function(){console.log("This is a function inside an array")}]

  //console.log(myArray[4])

  //function
  function myFunction()
  {
    console.log("This is my function")
  }

  myFunction() //Function is called // function body is executed

  //Arrow function
  let myFunction1 = () =>
  {
    console.log("This is my function one")
  }

  myFunction1() //Anjali, Atif, Shikha, Suchita doubts, Salman, Ravi support

  let myFunction2 = function()
  {
    console.log("This is my function anonymous")
  }
  
  console.log(myFunction2)
  console.log(myFunction)

  let myArray = [1, 2, "three", true, function(){console.log("this is function inside Array")}]

  console.log(myArray[4]()) // 

  let myObject = {
    one: 1,
    two: 2,
    three: function()
    {
      console.log("this is function inside the object")
    }
  }

  console.log(myObject.three())

  let myObject1 = {
                    A: 1, 
                    B: 2, 
                    C: 3
                  }

  console.log(myObject1)

  let myObject2 = myObject1 //wrong

  //console.log(myObject2)

  //myObject1.B = "two"

  // console.log("myObject1")
  // console.log(myObject1)
  // console.log("myObject2")
  // console.log(myObject2)
  
  let myObject3 = Object.assign({}, myObject1)  //wrong

  console.log(myObject1)
  console.log(myObject3)

  myObject1.B = "two"

  console.log("myObject1")
  console.log(myObject1)
  console.log("myObject3")
  console.log(myObject3)

  //console.log(myFunction2())
  //console.log(myFunction())

  // (function()
  // {
  //   console.log("This is IIFE")
  // })()

  //hoisting
  abc()

  // var abc = () =>
  // {
  //   console.log("Called the abc function")
  // }

  function abc()
  {
    console.log("Called the abc function")
  }

  //console.log(obj.A)

  let obj = 
  {
    A: 1, 
    B: 2,
    C: 3
  }

  myVariable = 10
  console.log(myVariable)

  var myVariable

  function makeHelloFunction()
  {
      const message = "Hello!"

      function sayHello()
      {
          console.log(message)
      }

      return sayHello
  }

  console.log(makeHelloFunction())

  const sayHello = makeHelloFunction()

  //makeHelloFunction()()
  //console.log("message:"+message)
  sayHello()

  //coercion
  let x = 42
  console.log(x)
  console.log(typeof x)
  //x = String(x)
  x = x+""
  console.log(x)
  console.log(typeof x)

  console.log("--------------------")




  const inputStyle = {
    backgroundColor: "blue", 
    margin: "10px"
  }
  

  return (
    <div style={{margin: "10px", backgroundColor: "pink"}}>
      <h1 >This is a Calculator</h1>
      <div>
        <input style={ inputStyle } type="text" value={result}/>
      </div>
      <div style={{margin: "10px"}}>
        <div>
          <MyButton text="1" clickFunction={()=>updateResult}/>
          <MyButton text="2"/>
          {/* <button style={{margin: "3px"}} onClick={()=>updateResult("2")} >2</button> */}
          <button style={{margin: "3px"}} onClick={()=>updateResult("3")}>3</button>
        </div>
        <div>
          <button style={{margin: "3px"}} onClick={()=>updateResult("4")}>4</button>
          <button style={{margin: "3px"}} onClick={()=>updateResult("5")}>5</button>
          <button style={{margin: "3px"}} onClick={()=>updateResult("6")}>6</button>
        </div>
        <div>
          <button onClick={()=>updateResult("7")}>7</button>
          <button onClick={()=>updateResult("8")}>8</button>
          <button onClick={()=>updateResult("9")}>9</button>
        </div>
        <div>
          <button>.</button>
          <button onClick={()=>updateResult("0")}>0</button>
          <button>{'<-'}</button>
        </div>
        <div>
          <button onClick={()=>updateResult("+")}>+</button>
          <button onClick={()=>updateResult("-")}>-</button>
          <button onClick={()=>updateResult("x")}>x</button>
          <button>/</button>
        </div><div>
          <button onClick={()=>updateResult("=")}>=</button>
          <button onClick={()=>updateResult("clear")}>Clear</button>
        </div>
        
      </div>
      {/* <button onClick={checkState}>Check</button> */}
    </div>

  );
}

export default App;
