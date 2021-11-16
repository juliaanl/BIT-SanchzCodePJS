const letr = document.getElementById("letr");
const numbr = document.getElementById("numbr");
let lastNumber = 0;

const oneA = document.getElementById("oneA");
const twoB = document.getElementById("twoB");

const threeC = document.getElementById("threeC");
const fourD = document.getElementById("fourD");

const fiveE = document.getElementById("fiveE");
const sixF = document.getElementById("sixF");

const sevenG = document.getElementById("sevenG");
const eightH = document.getElementById("eightH");

const nineI = document.getElementById("nineI");
const tenCN = document.getElementById("tenCN");

const elevenJ = document.getElementById("elevenJ");
const twelveCL = document.getElementById("twelveCL");

const clkOne = () => {
  if (letr.innerHTML == "" ) {
    letr.innerHTML = "A";
   
  } else {
    if (letr.innerHTML == "ABCDEFGHIJ" && numbr.innerHTML == 0) {
      numbr.innerHTML = + 1;
    }
  }
};

const clkTwo = () => {
    if (letr.innerHTML == "A") {
      letr.innerHTML += "B";
    } else {
        if(letr.innerHTML == "" ) {
          alert("Debe seleccionar la letra que sigue en completo orden.");
        }else {
          if (letr.innerHTML == "ABCDEFGHIJ" && numbr.innerHTML == 1 ) {
            numbr.innerHTML += + 2;
          } else {
            if (numbr.innerHTML.length < 1) {
              alert("Debe seleccionar el número continuo en completo orden.");
            }
          }
        }
    }
};

const clkThree = () => {
  if (letr.innerHTML == "AB") {
    letr.innerHTML += "C";
  } else {
      if(letr.innerHTML == "" || letr.innerHTML.length < 2  ) {
        alert("Debe seleccionar la letra que sigue en completo orden.");
      }else {
        if (letr.innerHTML == "ABCDEFGHIJ" && numbr.innerHTML.length == 2) {
          numbr.innerHTML +=  3;
        } else {
          if (numbr.innerHTML.length < 2) {
            alert("Debe seleccionar el número continuo en completo orden.");
          }
        }
      }
  }
};

const clkFour = () => {
  if (letr.innerHTML == "ABC") {
    letr.innerHTML += "D";
  } else {
      if(letr.innerHTML == "" || letr.innerHTML.length < 3 ) {
        alert("Debe seleccionar la letra que sigue en completo orden.");
      }else {
        if (letr.innerHTML == "ABCDEFGHIJ" && numbr.innerHTML.length == 3) {
          numbr.innerHTML +=  4;
        } else {
          if (numbr.innerHTML.length < 3) {
            alert("Debe seleccionar el número continuo en completo orden.");
          }
        }
      }
  }
};

const clkFive = () => {
  if (letr.innerHTML == "ABCD") {
    letr.innerHTML += "E";
  } else {
      if(letr.innerHTML == "" || letr.innerHTML.length < 4 ) {
        alert("Debe seleccionar la letra que sigue en completo orden.");
      }else {
        if (letr.innerHTML == "ABCDEFGHIJ" && numbr.innerHTML.length == 4) {
          numbr.innerHTML +=  5;
        } else {
          if (numbr.innerHTML.length < 4) {
            alert("Debe seleccionar el número continuo en completo orden.");
          }
        }
      }
  }
};
const clkSix = () => {
  if (letr.innerHTML == "ABCDE") {
    letr.innerHTML += "F";
  } else {
      if(letr.innerHTML == "" || letr.innerHTML.length < 5 ) {
        alert("Debe seleccionar la letra que sigue en completo orden.");
      }else {
        if (letr.innerHTML == "ABCDEFGHIJ" && numbr.innerHTML.length == 5) {
          numbr.innerHTML +=  6;
        } else {
          if (numbr.innerHTML.length < 5) {
            alert("Debe seleccionar el número continuo en completo orden.");
          }
        }
      }
  }
};
const clkSeven = () => {
  if (letr.innerHTML == "ABCDEF") {
    letr.innerHTML += "G";
  } else {
      if(letr.innerHTML == "" || letr.innerHTML.length < 6 ) {
        alert("Debe seleccionar la letra que sigue en completo orden.");
      }else {
        if (letr.innerHTML == "ABCDEFGHIJ" && numbr.innerHTML.length == 6) {
          numbr.innerHTML +=  7;
        } else {
          if (numbr.innerHTML.length < 6) {
            alert("Debe seleccionar el número continuo en completo orden.");
          }
        }
      }
  }
};
const clkEight = () => {
  if (letr.innerHTML == "ABCDEFG") {
    letr.innerHTML += "H";
  } else {
      if(letr.innerHTML == "" || letr.innerHTML.length < 7 ) {
        alert("Debe seleccionar la letra que sigue en completo orden.");
      }else {
        if (letr.innerHTML == "ABCDEFGHIJ" && numbr.innerHTML.length == 7) {
          numbr.innerHTML +=  8;
        } else {
          if (numbr.innerHTML.length < 7) {
            alert("Debe seleccionar el número continuo en completo orden.");
          }
        }
      }
  }
};
const clkNine = () => {
  if (letr.innerHTML == "ABCDEFGH") {
    letr.innerHTML += "I";
  } else {
      if(letr.innerHTML == "" || letr.innerHTML.length < 8 ) {
        alert("Debe seleccionar la letra que sigue en completo orden.");
      }else {
        if (letr.innerHTML == "ABCDEFGHIJ" && numbr.innerHTML.length == 8) {
          numbr.innerHTML +=  9;
        } else {
          if (numbr.innerHTML.length < 8) {
            alert("Debe seleccionar el número continuo en completo orden.");
          }
        }
      }
  }
};
const clkEleven = () => {
  if (letr.innerHTML == "ABCDEFGHI") {
    letr.innerHTML += "J";
  } else {
      if(letr.innerHTML == "" || letr.innerHTML.length < 9 ) {
        alert("Debe seleccionar la letra que sigue en completo orden.");
      }else {
        if (letr.innerHTML == "ABCDEFGHIJ" && numbr.innerHTML.length == 9) {
          numbr.innerHTML +=  0;
        } else {
          if (numbr.innerHTML.length < 9) {
            alert("Debe seleccionar el número continuo en completo orden.");
          }
        }
      }
  }
};



 oneA.onclick = function () {
     clkOne();
 };
 twoB.onclick = function () {
    clkTwo();
};
threeC.onclick = function () {
  clkThree();
};
fourD.onclick = function () {
  clkFour();
};
fiveE.onclick = function () {
  clkFive();
};
sixF.onclick = function () {
  clkSix();
};
sevenG.onclick = function () {
  clkSeven();
};
eightH.onclick = function () {
  clkEight();
};
nineI.onclick = function () {
  clkNine();
};
elevenJ.onclick = function () {
  clkEleven();
};






















































































/*let ultimoNumero = 0;
const clickBottom =  (letra, numero) => {
    if (numero > ultimoNumero+1){
        alert("Debe seleccionar el letra/número siguiente en completo orden.");
    }
    else{
        ultimoNumero = numero;
        letras.innerHTML += letra; 
        numeros.innerHTML += numero;
    }
};*/
