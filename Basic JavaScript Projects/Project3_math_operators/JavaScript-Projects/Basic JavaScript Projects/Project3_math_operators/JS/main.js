

  function addition_Function(){//Additon
    var addition=2+2;
    document.getElementById("Math").innerHTML="2+2="+ addition;
  }

  function subtraction_Function(){//Subtraction
    var Subraction=5-2;
    document.getElementById("Math2").innerHTML="5-2="+Subraction;

  }

  function multiplication_Function(){//Multiplication
    var simple_Math = 6*8;
    document.getElementById("Math3").innerHTML="6*8="+ simple_Math;
  }

  function division_Function(){//Division
    var simple_Math = 48/6;
    document.getElementById("Math4").innerHTML="48/6="+simple_Math;
  }

  function more_Math_Function(){//Multiple Math Operations
    var simple_Math=(1+2)*10/2-5;
    document.getElementById("MoreMath").innerHTML="1plus2,multiplies by 10,divided in half and then subtracted by 5 equals"+simple_Math;
  }

  function more_Math2_Function(){//Multiple Math Operations
    var simple_Math=(1+3)*4/2-5;
    document.getElementById("MoreMath2").innerHTML="1plus3,multiplies by 4,divided in half and then subtracted by 5 equals"+simple_Math;
  }

  function modulus_Operator_Function(){
    var simple_Math= 25 % 6;
    document.getElementById("modulas_Operator").innerHTML="When you divided 25 by 6 you have a remainder of:" +simple_Math;
  }

  function negation_Operator_Function(){
    var x =10;
    document.getElementById("Neg").innerHTML=-x;
  }

  var X=5;
  X++;
  document.write(X);

  var A=5.25;
  A--;
  document.write(A);

  window.alert(Math.random());

  window.alert(Math.random())*100;

  