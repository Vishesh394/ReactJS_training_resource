// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'



// import food1 from './assets/food1.png'
// import food2 from './assets/food2.png'
// import food3 from '.'

import AdminPanel from "./components/AdminPanel"
import LoginForm from "./components/LoginForm"
import Person from "./components/Person"
import User from "./components/User"
import ReactForms from "./components/ReactForms"
import ReactHook from "./components/ReactHook"
import React, { useReducer } from "react"
import ProductFetch from "./components/ProductFetch"
import RefHook from "./components/RefHook"
import MemoHook from "./components/MemoHook"



{/* function App() {
  const [count, setCount] = useState(0)
//adding data 
    // const foodlist=[
    //   {id:1,food:"Roti",price:"Free"},
    //   {id:2,food:"Burger",price:90},
    //   {id:3,food:"Naan", price:20},
    //   {id:4,food:"Sweets",price:200},
    //   {id:5,food:"Grilled sandwitch",price:40}
    // ]
    console.log(foodlist)    //the above list is shown as ARRAY in console
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <p class="h1">h1. Bootstrap heading</p>
<p class="h2">h2. Bootstrap heading</p>
<p class="h3">h3. Bootstrap heading</p>
<p class="h4">h4. Bootstrap heading</p>
<p class="h5">h5. Bootstrap heading</p>
<p class="h6">h6. Bootstrap heading</p>
      </div> */}
      {/* <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
    </tr>
  </tbody>
</table>
 */}


{/* ----------------------WITHOUT USING MULTIPLE TD TAGS---------*/}
{/* ----USING MAP FUNCTION----- */}
{/* <table>
  <thead>
    <tr></tr>
  </thead>
  <tbody>
    <td>{foodlist.food}</td>
    <td>{foodlist.price}</td>
    <td>{foodlist.}</td>
  </tbody>
</table> 


    </>
  )
}
*/}

/*function App(){
  const isLogin=false
  var content=""
  if(isLogin){
    content=<AdminPanel/>

  }
  else{ 
    content=<LoginForm/>
    }
    return (
      <div>
        {content}
      </div>
    )
  
}
*/

// We can reduce the lines of code
//conditional rendering:
// function App(){
  // const firstName="Vikas"
  // const lastName="Singh"
  // const email="vikas@gmail.com"

  // instead of passing individual we create an object of all the properties
   
  //  const userData={
  //   firstName:"Vikas",
  //   lastName:"Singh",
  //   email:"vikas@gmail.com"
  //  }

  // const isLogin=false

  // return(
  //     <div>
  //   {
  //     isLogin?<AdminPanel/>:<LoginForm/>
  //     // OR
  //     // isLogin&&<AdminPanel/>
  //   }
  //   {/* <Person firstName={firstName} lastName={lastName} email={email}/> */}
  //   <Person userData={userData}/>  
  // </div>

  // )


// }

// #USER COMPONENT

// function App()
// {
//   return( <div>
//     <User/>
//   </div>)
// }

// #REACT FORMS:
/* function App(){
 return (<div>
      <ReactForms/>
  </div>)
}
export default App */

//Fetch API
/*function App(){
  return (
    <div>
      <FetchApi/>
    </div>
  )
}
export default App;
*/


// run effect only on mount(once)
/*function App(){
  return (
  <div>
    <ReactHook/>
  </div>
)
}
export default App; */


// fetching api of products
// Assignment questions: 
/*function App(){
  return(
    <div>
      <ProductFetch/>
    </div>
  )
}
export default App;*/

// RefHook : 
// 1.
/*
function App(){
  return(
    <div>
      <RefHook/>
    </div>
  )
}
export default App;
*/

// 2.
// function App(){
//   return(
//     <div>
//       <RefHook/>
//     </div>
//   )
// }
// export default App;
/*
function App(){
  return(
    <div>
      <MemoHook/>
    </div>
  )
}
export default App;
*/


//use Reducer hook of react hook

/*
function App(){
  const initialState=0;
  const reducer=(state,action)=>{
    let updateState=state+action;
    return updateState;
  }
  const[state,dispatch]=useReducer(reducer, initialState)
  return(
    <div>
      <h1>{state}</h1>
      <button onClick={()=>dispatch(1)}>Increase</button>
    </div>
  )
}
export default App
*/

//using switch case in useReducer for increasing an decreasing by giveing payload.
/*

function App(){
  const initialState=0;
  const reducer=(state,action)=>{
  switch(action.type){
    case'add':
      return state+action.payload
    case 'subtract':
      return state-action.payload
    case 'reset':
      return initialState
    default:
      throw newError()
  }    
  }
  const[state,dispatch]=useReducer(reducer, initialState)
  return(
    <div>
      <h1>{state}</h1>
      <button onClick={()=> dispatch({type:'add',payload:1})}>Increase</button>
      <button onClick={()=> dispatch({type:'subtract',payload:1})}>Decrease</button>
    </div>
  )
}
export default App
*/

//ASSIGNMENT 
/*
function App() {
  const initialState = {
    input: "",
    items: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_INPUT":
        return { ...state, input: action.payload };

      case "ADD_ITEM":
        if (state.input.trim() === "") return state;
        return {
          ...state,
          items: [...state.items, state.input],
          input: "",
        };

      case "DELETE_ITEM":
        return {
          ...state,
          items: state.items.filter((_, i) => i !== action.payload),
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Shopping Cart</h1>

      <input
        type="text"
        value={state.input}
        onChange={(e) =>
          dispatch({ type: "SET_INPUT", payload: e.target.value })
        }
        placeholder="Enter item"
      />

      <button onClick={() => dispatch({ type: "ADD_ITEM" })}>ADD</button>

      <ul>
        {state.items.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => dispatch({ type: "DELETE_ITEM", payload: index })}>
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
*/

//using handle statements for doing this task instead of switch statement.
// function App()
// {
//   const
//   input:'',
//   items[]

// }
// const handle change
// const handle submit
// const HandleChange=()=>{

// }


//Custom hooks
import Posts from "./Posts"
function App(){
  return(
    <div>
      <Posts/>
    </div>
  )
}
export default App;


//---------------------------------------------------------------------------------------------------------------------
