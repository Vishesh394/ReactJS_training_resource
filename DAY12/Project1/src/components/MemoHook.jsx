import { useState} from "react";
function MemoHook(){
    const[number,setNumber]=useState(0);
    const[counter,setCounter]=useState(0);
    function cubeNum(num){
        console.log('calculations done');
        return Math.pow(num,3) // math is a library and power is inbuilt function.
    }
     const result = useMemo(() => cubeNum(number), [number]);
    return (
        <div>
            <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
            <h1>cube of number</h1>
            <button onClick={()=>setCounter(counter+1)}>Counter++</button>
            <h1>Counter:{counter}</h1>


        </div>
    )
}
export default MemoHook;