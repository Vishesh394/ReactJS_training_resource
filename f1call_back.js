// Asynchronous programming:
/*function greet(fullname){
    console.log(`Welcome:${fullname}`)
}
function processData(callback)
{
    var fullname="admin"
    callback(fullname)
}
processData(greet)
*/

// ANONMOUS FUNCTION 
function processData(callback)
{
    var fullname="admin"
    callback(fullname)
}
processData(function(fullname){
    console.log(`welcome:${fullname}`)
})

// Arrow function:
function processData(callback)
{
    var fullname="admin"
    callback(fullname)
}
processData((fullname)=>{
    console.log(`welcome: ${fullname}`)
})
function sayHi(){
    console.log("hii after 2 sec")
}
setTimeout(sayHi,2000)

