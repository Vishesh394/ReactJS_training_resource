/*
var sum=0
var n=1
while(n<=40){
    if(n%2!=0)
    {
        console.log(n)
        sum=sum+n
    }
n++
}
console.log(sum)
*/

//number and power is given
/*var n=10
var p=5
while(p>=1){
    n=n*p
    p--
    
}
console.log(n)
*/

//increment and decrement using for loop 
/*
for(i=1;i<=10;i++)
{
    console.log(i)
}

for(i=10;i>=1;i--)
{
    console.log(i)
}
*/

//print table
/*
for(i=1;i<=10;i++)
{
    num=2
    console.log(num+"X"+i+"="+num*i)

}*/


//do..while loop 

//increment do while loop 
/*
var x=1
do{
    console.log(x)
    x++
}
while(x<=5)
*/

//decrement do..while loop
/*
do{
    console.log(x)
    x--
}
while(x>=1)

*/

// BREAK STATEMENT 
/*
var n=2
switch(n){
    case 1:
    console.log("this is case 1")
    break;
    case 2:
        console.log("this is case 2")
        break;
    case 3:
        console.log("this is case 3")
        break;
    default:
        console.log("the END")

}
*/

// another example of break statement
/*
for(var x=1;x<=10;x++)
{
    if(x==5){
        break;
    }
    console.log(x)
}*/

//check whether the num is prime or not
/*
var num=3
var p=1
for(var d=2;d<num/2;d++){
    if(num%d==0)
{
    p=0

    break;
}
}
if(p==1)
{
    console.log("prime")

}
else{
    console.log("not prime")
}
*/

//CONTINUE STATEMENT:
/*
for(var x=1;x<=10;x++)
{
    if(x==5||x==8||x==9){
        continue    // skip this part of loop i.e. skip 5,8,9 from the series
    }
    console.log(x)
}
*/

//NESTED LOOP:
//outer loop for row and inner loop for column
for(var r=1;r<=5;r++)
{
    for(var c=1;c<=r-5;c++)
    {
        document.write("$") //does not print new line
       
    }
     document.write("<br>")
}

