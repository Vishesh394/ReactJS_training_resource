function FetchApi(){
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log(`count:${count}`) //if we wnt to fetch the data from ap add here in console.log
    })
    const handleSubmit=()=> {
        setCount(count+1)
    }
    

    return(
<div> 
<h1>Good MOrning</h1>
<button onClick={handleSubmit}>Click Here</button>
</div>
) 
    
}
export default FetchApi;