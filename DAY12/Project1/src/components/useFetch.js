import { useEffect,useState } from "react";

//Can be used for multiple pages . just pass the url and then it will fetch the API data.
function useFetch(url){
    const[data,setData]=useState(null);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);


    useEffect(()=>{
        setLoading(true);
        fetch(url).then((res)=>{
            if(!res.ok) throw new Error("Network error");
            return res.json();
        })
        .then((data)=> setData(data))
        .catch((err)=>setError(err.message))
        .finally(()=>setLoading(false));
    },[url]);
    return{
        data,loading,error
    };
}
export default useFetch;
