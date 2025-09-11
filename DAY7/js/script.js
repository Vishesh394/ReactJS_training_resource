//array: for storing multiple homogenous datatypes
// var num=[1,2,3,4,5,5]
/*console.log(num)

console.log(num[0])   // for accessing the element at indexing 0
for(var i=0;i<=4;i++) // for printing all the elements of array 
{
    console.log(num[i])
}
*/
// for..of loop can be used to iterate over an array
// for( number of num){
//     console.log(number)
// }

//multi dimensional array
var arr=[
[1,2,3],[11,12,14],[10,20,30]
]
for(var i=0;i<3;i++)
{
    for(var j=0;j<3;j++)
    {
        document.writeln(arr[i][j])
    }
    document.write("<br>")   
}
// -----------------------------------------------------------------------
//JAVA SCRIPT DIALOG BOXES:

// var n1=prompt(n1)
//     var n2=prompt(n2)
//     var s=n1+n2
//     alert(s)

// -----------------------------------------------------------------------
//CONFIRM BOX
/* var choice =confirm("Allow notifications")
if(choice)
{
    alert("thanks")

}
else{alert("Notification Blocked")

} 
*/
// -----------------------------------------------------------------------

//JAVASCRIPT FUNCTION: A function is an independent block of codre that perform a specific task
function  fun(){
   console.log("Java Script is a funny lang")
}
fun()

function greet(fullname){
    console.log("Welcome to this web page:"+" "+fullname)

}

greet("Hardik")
greet("Bishesh")

//Function to find factorial of a number.
var n=4
for(var i=n;i<n-1;n--)
{
    
}