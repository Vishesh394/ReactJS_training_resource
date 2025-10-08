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
import React from "react"
import ProductFetch from "./components/ProductFetch"



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
function App(){
  return(
    <div>
      <ProductFetch/>
    </div>
  )
}
export default App;







