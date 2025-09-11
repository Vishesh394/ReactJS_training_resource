//find minimum and maximum value from an array 
/*var num=[13,42,53,46,57,65]
var min=num[0]
// search minimum
for(var i=1;i<6;i++)
{
    if(num[i]<min)
    {
        min=num[i]
    }
}
console.log("the minimum element is:"+min)
*/
// search maximum
/*var max=num[5]
for(var i=0;i<6;i++)
{
    if(num[i]>max)
    {
        max=num[i]

    }

}
console.log("the maximum element is:"+max)
*/
 
var arr = [

    [1, 2, 1],
    [4, 5, 6],
    [7, 8, 9],
];
//ORIGINAL ARRAY:
document.write("the original array is:")
document.write("<br>")

for(var i=0;i<3;i++)
{
    for(var j=0;j<3;j++)
    {
        document.writeln(arr[i][j])
    }
    document.write("<br>")
}

//TRANSPOSE OF ARRAY
document.write("The transpose of array is:")
document.write("<br>")

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
    document.write(arr[j][i] + " ");
}
    document.write("<br>");
 }

//SUM OF DIAGONAL ELEMENTS OF ARRAY:
document.write("The sum of main diagonal elements:")
document.write("<br>")
var sum=0

for(var i=0;i<3;i++)
{sum=sum+arr[i][i]
}
document.write(sum)
document.write("<br>")
document.write("Sum of secondary diagonal elements:")

var sumSec=0
for(var i=0;i<3;i++)
{
    sumSec=sumSec+arr[i][n-1-i]
}
document.write(sumSec)



//SUM OF TWO ARRAY :
var arr1=[
    [1,3,4],
    [5,4,3],
    [6,5,2]
]
for(numbers of arr1)
{
    document.writeln(numbers)
}



