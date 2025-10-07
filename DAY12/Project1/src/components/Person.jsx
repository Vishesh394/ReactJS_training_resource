function Person({userData}){ //userData object is a parameter

    return (
        <div>
            <h1>Personal Info</h1>
            <p>First Name:{userData.firstName}</p>
            <p>Last Name:{userData.lastName}</p>
            <p>Email:{userData.email}</p>
        </div>
    )
}
export default Person
