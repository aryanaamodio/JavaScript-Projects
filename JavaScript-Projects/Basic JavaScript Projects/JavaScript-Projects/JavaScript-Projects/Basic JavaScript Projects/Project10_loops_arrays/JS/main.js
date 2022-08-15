function Call_Loop(){//While Loops
    var Digit="";
    var X=1;
    while(X < 11){
        Digit += "<br>"+X;
        X++;
    }
    document.getElementById("Loop").innerHTML=Digit;
}

var Instruments=["Guitar", "Drums","Piano","Bass","Violin","Trumpet","Flute"];//for Loop
var Content="";
var Y;
function for_Loop(){
    for(Y = 0; Y < Instruments.length; Y++ ){
        Content += Instruments[Y] + "<br>" ;
    }
    document.getElementById("List_of_Instruments").innerHTML= Content;
}

function array_Function() {//Array function
    var Cat_Picture= [];
    Cat_Picture[0]="sleeping";
    Cat_Picture[1]="playing";
    Cat_Picture[2]="eating";
    Cat_Picture[3]="purring";
    document.getElementById("Array").innerHTML="In this picture, the cat is "+
    Cat_Picture[2]+".";
    
}

function constant_function(){//Constant Function
    const Musical_Instrument={type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color="pink";
    Musical_Instrument.price="$800";
    document.getElementById("Constant").innerHTML="The cost of the "+
    Musical_Instrument.type+" was reduced to  "+ Musical_Instrument.price;
}

let car={//Let
    make: " Dodge",
    model:" Viper",
    year:"2021",
    color:" pink",
    description:function(){
        return"The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML= car.description();

