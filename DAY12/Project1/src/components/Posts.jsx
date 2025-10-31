import React from "react";
import useFetch from "./useFetch";
function Posts(){
    const{data,loading,error}=useFetch("");
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>

    return (
        <ul>
            {data.map((Posts)=>
            (
                <li key={Posts.id}>{Posts.title}</li>
            ))}
        </ul>
    );
}
export default Posts;