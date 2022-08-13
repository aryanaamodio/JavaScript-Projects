var X= 10;//Global variable page 142
function Add_numbers_1() {
    document.write(20+X+"<br>");
}
function Add_numbers_2() {
    document.write(X+100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1(){//local variable
    var X=10;
    document.write(20 +X+ "<br>");
}
function Add_numbers_2(){
    document.write(X+100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1(){//console log to see error
    var X=10;
    console.log(15+X);
}
function Add_numbers_2(){
    console.log(X+100);
}
Add_numbers_1();
Add_numbers_2();


if(1<2){//If Statements
    document.write("The left number is smaller than the number on the right.")
}

function get_Date(){//If Statement with document.getElementByID() method
    if(new Date().getHours()<18){
        document.getElementById("Greeting").innerHTML="How are you today?";
    }
}

if(3<4){//My own if statement
    document.write("I love cats!")
}

function Age_Function(){ //Else Statements
Age=document.getElementById("Age").value;
if(Age>=18){
    Vote="You are old enough to vote!";
 }
 else{
    Vote="You are not old enought to vote!";
}
document.getElementById("How_old_are_you?").innerHTML=Vote;
}

function Time_function(){//Else If Statements
    var Time= new Date().getHours();
    var Reply;
    if(Time<12 == Time>0){
        Reply="It is morning time!";
    }
    else if(Time>=12==Time<18){
        Reply ="It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}




