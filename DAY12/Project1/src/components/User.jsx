// components(folder) -> user.jsx
import {useState}from "react"
function User(){
    const [userData, setUserData]=useState(
        {
            fullName: "Guest",
            Email: "guest@gmail.com",
            Mobile: 9610671980,
            City: "Mohali"       }
    )
    const updateUserData=()=>{
        // setUserData((prevData))=>({...prevData,city:"Mohali"})
        const updateFullName=()=>{setFullName("Vishesh")}
    }
   
        // const[fullName, setFullName]=useState("admin")

        // const updateFullName=()=>{setFullName("Guest")}
//  return <div>
//     <h1>Welcome:{fullName}</h1>
//     <button onClick={updateFullName}>Updated FullName</button>
//     </div>

return <div>
    <p>Full Name:{userData.fullname}</p>
    <p>Email:{userData.email}</p>
    <p>Mobile:{userData.mobile}</p>
    <p>city:{userData.city}</p>
    <button  onClick={updateUserData}>Click Here</button>
</div>

}
export default User