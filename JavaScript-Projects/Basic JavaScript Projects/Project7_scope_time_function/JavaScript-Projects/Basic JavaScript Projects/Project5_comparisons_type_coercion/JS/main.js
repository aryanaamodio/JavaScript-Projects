document.write(typeof "Word");//string

document.write("10"+5);//Type Coercion

function my_Function(){ //NAN
    document.getElementById("Test").innerHTML=0/0;
}

function a_Function(){ //True
    document.getElementById("True").innerHTML=isNaN('This is a string');
}


function the_Function(){//False
    document.getElementById("False").innerHTML =isNaN('007');
}

document.write(2E310);//positive

document.write(-3E310);//negative

document.write(10>2);//True

document.write(10<2);//False

console.log(2+2);//console answer 4

console.log(2>6);//console answer false

document.write(10 == 10);

document.write(3==11);

x=10
y=10
document.write(x===y);

X=82;
Y="79";
document.write(X===Y)

X=82;
Y="82";
document.write(X===Y)


A="Magnus";//False
B="Magnuss";
document.write(A===B);

document.write(5>2&&10>4);//True

document.write(5>10&&10>4);//False

document.write(5>10||10>4);//True

document.write(5>10||10>20);//False

function not_Function(){//Not Function
    document.getElementById("Not").innerHTML=!(20>10);
}

function nott_Function(){
    document.getElementById("Nott").innerHTML=!(5>10);
}



