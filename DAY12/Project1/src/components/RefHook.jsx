// 1.For accesing DOM for element.
/* import { useRef } from "react";
function RefHook(){
    const inputElement=useRef();
    const btnclicked=()=> {
        inputElement.current.style.background="green"
        inputElement.current.focus()
        inputElement.current.style.color="white"

    }
    return(
        <div>
            <input type="text" ref={inputElement} />
            <button onClick={btnclicked}>Click Here</button>
        </div>
    )
}
export default RefHook;
*/

//2.Storing mutsble values without re-rendering:(or to access mutable values):

/* import { useRef } from "react";
const RefHook=()=>{
    const clickCount=useRef(0);
    const handleClick=()=>{
        clickCount.current+=1;
        console.log('Clicked',clickCount.current)
    }
    return (
        <button onClick={handleClick}>Click here</button>
    )
}
export default RefHook;
*/

//3. Tracking previous state:  
/*
import { useState, useEffect,useRef } from "react";
const RefHook=()=>{
    const[count,setCount]=useState(0);
    const preCount=useRef();
    useEffect(()=>{
        preCount.current=count; //Update ref After render
    }, [count]);
return (
    <div>
        <p>Current:{count}</p>
        <p>Previous:{preCount.current}</p>
        <button onClick={()=> setCount(count+1)}>Increment</button>
    </div>
)

}
export default RefHook;
*/

// 4.Avoiding unnecessary effect on first render:
import { useState, useEffect,useRef } from "react";
const RefHook=()=>{
    const[count,setCount]=useState(0);
    const isFirstRender=useRef(true);
    useEffect(()=>{
        if(isFirstRender.current){
            isFirstRender.current=false;
            return;
        }
        console.log('Effect ran after update ,not on intial render')
 }, [count]);
return (
    <div>
        <button onClick={()=> setCount(count+1)}>Increment</button>
    </div>
)

}
export default RefHook;

// 