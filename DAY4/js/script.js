var fullname="admin"
console.log(fullname); //output: admin
console.log(typeof(fullname)); //output: string

// console.log("hello Student");
// console.log("Good mornin");

var email="admin@gmail.com"
console.log(email);
console.log("this is of type:"+typeof(email))  //string type

var age=20
console.log(age);
console.log("this is a of type: "+ typeof(age)); // integer type

var choice=true
console.log(choice); // boolean type
console.log("this is a of type:",typeof(choice))

var mobile
console.log(mobile) //output: undefined


var n1=20;
var n2=34;
var s=n1+n2;
console.log("Sum=",s); // intead of "+" in we can use "," also;

var sub=n1-n2;
console.log("Sub=",sub);

var product=n1*n2;
console.log("product of numbers: ",product);

//find square and cube of a number
var num=6;
console.log("The square of number is:",num*num);


//given 5 numbers find sum and avg 
var num1=2,num2=3,num3=5,num4=6,num5=8;
var sum=num1+num2+num3+num4+num5;
console.log("the sum of numbers:", sum);
var avg=sum/5;
console.log("The avg of numbers:",avg);


//given unit price ,quantity find amount,give a discount of 10% on amount. find payment after discount.
var unit_price=150;
var quantity=5;
var amt=unit_price*quantity;
console.log("the amount: ",amt);
var disc=(amt*10)/100;
var payment=amt-disc;
console.log("the payemnt after discount:", payment);


console.log(10>5)
console.log(15<10)
console.log(50!=49)
console.log(90==90)
console.log(23>=23)

//conditions
var num=15
if(num>5){ //
    console.log("number is greater than 5");
}
console.log("good day!")

var num=4 
if(num>5){
    console.log("Number is greater than 5")
}
console.log("good day!")
