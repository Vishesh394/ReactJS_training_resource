// 1.given joining year , current year and salary if working duration is grater than or equal to 2 years. given an increment if 20% in salary . otherwise no increment . find the new salary after increment.
// 2. given cost price and selling price. find profit and loss
// 3.given 3 nums find max numbers
// 4. given 4 nums find min nums



//given 3 nums find max numbers
var n1=10
var n2=20
var n3=25
var n4=12

var max1=(n1>n2)?n1:n2  //with the gelp of ternary operator
var max2=(n3>max1)?n3:max1
console.log("The maximum out of three numbers :",max2)

//minimum out of 4 numbers.
var min=!(n1>n2)?n1:n2
var min1=!(min>n3)?min:n3
var min2=!(min1>n4)?min1:n4
console.log("the minimum out of 4 numbers:",min2)

//even shorter version 
console.log("The minout of 4 nums:",Math.min(n1,n2,n3,n4))
console.log("The maxout of 4 nums:",Math.max(n1,n2,n3,n4))


// given cost price and selling price. find profit and loss
var cp=200
var sp=225
var prof=sp-cp
var loss=cp-sp
var pp=(prof/cp)*100
var lp=(loss/cp)*100
console.log("Profit:",prof)
console.log("loss:",loss)
console.log("profit percentage:",pp)
console.log("Loss percentage:",lp)

// given joining year , current year and salary if working duration is grater than or equal to 2 years. given an increment if 20% in salary . otherwise no increment . find the new salary after increment.
let sal=Number(prompt("Enter your salary:"))
let cy=Number(prompt("Enter current year:"))
let jy=Number(prompt("enter your joining year:"))

var wd=cy-jy
if(wd>=2){
    inc=(sal*0.2)
    newsal=sal+inc
    console.log("Salary is incresed by 20%",inc)
    console.log("New salary:",newsal)
    
}
else{
    console.log("no increment")
    alert("working duration is not equal to or more than 2 years")
}
