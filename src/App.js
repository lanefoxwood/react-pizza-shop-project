import './App.css';
import React, { useState, useEffect} from "react"


// todo: 2) Add checkboxes showing all the possible ingredients (which ones are up to you), 
// - alphabetized, 
// and 3) When the user selects any pizza type, except "Build My Own", 
// - the ingredients for that type of pizza should be checked. 
// - ingredients inappropriate to that type of pizza should be unchecked.
// - The user should be able to check or uncheck ingredients. 


function App() {
  const [pizza, setPizza] = useState([]);
  const [choice, setChoice] = useState()

  useEffect(() => {
    setPizza(data)
  }, [])

  useEffect(() => {
      data.map(type => type.ingredients)
  }, [choice])
 


  return (
    <>
      <div className="container">
        <form className="drop-down">
          <div className='form-group'>
            <h2>select type of pizza</h2>
            <select onChange={(e) => setChoice([e.target.value])}>
              <option>---select option---</option>
              {pizza.map(type => <option value={type.ingredients} key={type.name}>{type.name}</option>)}
            </select>
          </div>
          <div className='form-group'>
            {choice && !choice.includes("---select option---")
            ? <>
            <h2>Choose your toppings:</h2>
            <label><input defaultChecked className='topping-option' type="checkbox" />
              {choice}
            </label>
            </>
            : ""
            }
            
          </div>
        </form>
      </div>
    </>

  )

}

export default App;


const data = [
  {
    name: "cheese",
    ingredients: "cheese",
  },
  {
    name: "vegetarian",
    ingredients: "peppers",
  },
  {
    name: "meat lovers",
    ingredients: "ham",
  },
  {
    name: "all in",
    ingredients: "pineapple",
  },
  {
    name: "build my own",
    ingredients: [
      "cheese",
      "peppers",
      "ham",
      "pineapple"
    ]
  },
]


