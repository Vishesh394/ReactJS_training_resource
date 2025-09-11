//.Right triangle star pattern
document.writeln("Right triangle star pattern")
document.write("<br>")
for(var r=0;r<4;r++)
{
    for(var c=0;c<=r;c++)
    {
        document.writeln("*")
    }
    document.write("<br>")
}
//
document.writeln("Right triangle numeric pattern")
document.write("<br>")
for(var r=0;r<4;r++)
{
    for(var c=0;c<=r;c++)
    {
        document.writeln(r)
    }
    document.write("<br>")
}

document.writeln("Right triangle num increment pattern")
document.write("<br>")
for(var r=0;r<4;r++)
{
    for(var c=0;c<=r;c++)
    {
        document.writeln()
        
    }
    document.write("<br>")
}



//3.given day number print week day for 1 to 5 and week end for 6 and 7
var n=8


switch(n){
    case 1:
        document.write("weekday--> Monday")
        break;
    case 2:
        document.write("weekday--> Tuesday")
        break;
    case 3: 
        document.write("weekday--> Wednesday")
        break;
    case 4:
        document.write("weekday--> Thrusday")
        break;
    case 5:
        document.write("weekday--> Friday")
        break;
    case 6:
        document.write("weekend--> Saturday")
        break;
    case 7:
        document.write("weekend--> Sunday")
        break;
    default:
        document.write("Invalid Input")
    
}