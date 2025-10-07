// indication end of function
// return value to calling function
function sum2(n1,n2)
{
    return(n1+n2)
}
console.log("sum of two num:"+sum2(13,14))

function max(n1,n2,n3)
{
    if(n1>n2 && n1>n3)
    {
        return ("n1 is greater which is:"+ n1)

    }
    else if(n2>n1&&n2>n3)
    {
        return ("n2 is greater which is:"+n2)
    }
   else{
    return("n3 is greater which is:"+n3)
   }
}
console.log(max(25,24,36))

function fact(n)
{
    var f=1
    while(n>=1)
    {
        f=f*n
        n--
    }
    return f

}
console.log(fact())
