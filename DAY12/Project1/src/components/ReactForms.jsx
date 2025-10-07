// import { useState } from "react"
// function ReactForms(){
//     const [fullname,setFullName]=useState({fullname:"", email:""})


//     // HANDLE CHANGE EVENT: this function is used to change ever value or more than one value with a single function
//    const handleChange=(e)=>{
//     const{name,value}=e.target;
//     setUserData((prevData)=>({
//         ...prevData,
//         [name]:value
//     }))
//    }
// // HANDLE SUBMIT :
//     const handleSubmit=(e)=>{
//         e.prevDafault()
//         console.log(`Full Name:${userData.fullname},Email:${userData.email}`)
//     }

    


//     return( 
//     <div className="container">
//         <form onSubmit={handleSubmit}>
//             <div className="my-3">
//                 {/* <input type="text" className="form-control" placeholder="Full Name" onChange={(e)=> setFullName(e.target.value)} /> */}
//                 <input type="text" className="form-control" placeholder="Full Name" onChange={handleChange} value={userData.fullname} name="fullname" />
//             </div>
//             <div className="my-3">
//                 <input type="email" className="from-control" placeholder="Email" onChange={handleChange} vlaue={userData.email} name="email" />

//             </div>
//             <div>
//                 <button className="btn btn-dark" >Submit</button>

//             </div>
//         </form>
        
//     </div>
//     )
// }
// export default ReactForms


// chatgpt code
import { useState } from "react";

function ReactForms() {
    //for adding multiple properties at one place .
  const [userData, setUserData] = useState({
    fullname: "",
    email: ""
  });

  // HANDLE CHANGE EVENT
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Full Name: ${userData.fullname}, Email: ${userData.email}`);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            onChange={handleChange}
            value={userData.fullname}
            name="fullname"
          />
        </div>
        <div className="my-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={handleChange}
            value={userData.email}
            name="email"
          />
        </div>
        <div>
          <button className="btn btn-dark">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ReactForms;
