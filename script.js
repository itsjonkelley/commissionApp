var popQuotaBtn = document.querySelector("#quotaBtn");
//contracts input variables
var inputConPrem = document.getElementById("quotaConPrem");
var inputConEaas = document.getElementById("quotaConEaas");
var outputConTotal = document.querySelector("#quotaConTotal");
//verification input variables
var inputVerifPrem = document.getElementById("quotaVerifPrem");
var inputVerifEaas = document.getElementById("quotaVerifEaas");
var outputVerifTotal = document.getElementById("quotaVerifTotal");
//quarterly output variables
var quarterlyConPrem = document.getElementById("qConPrem");
var quarterlyConEaas = document.getElementById("qConEaas");
var quarterlyConTotal = document.getElementById("qConTotal");
var quarterlyVerifPrem = document.getElementById("qVerifPerm");
var quarterlyVerifEaas = document.getElementById("qVerifEaas");
var quarterlyVerifTotal = document.getElementById("qVerifTotal");




quotaButton = document.getElementById("quotaBtn");

plusOperation = function () {
//sum of on premise and eaas user inputs
    quotaConT = parseInt(inputConPrem.value) + parseInt(inputConEaas.value);
    outputConTotal.innerText = quotaConT;
//sum of on premise verif and eaas verif user inputs
    quotaVerifT = parseInt(inputVerifPrem.value) + parseInt(inputVerifEaas.value);
    outputVerifTotal.innerText = quotaVerifT;
};


// ***** SECOND COLUMN OUTPUT *****
//function to get all quarterly totals (multiply column 1 by 3)
byThreeOperation = function () {
//3 time contract prem input
    outputThreeConPrem = parseInt(inputConPrem.value) * 3;
    quarterlyConPrem.innerText = outputThreeConPrem;
//3 times contract eaas input
    outputThreeConEaas = parseInt(inputConEaas.value) * 3;
    quarterlyConEaas.innerText = outputThreeConEaas;
//3 times contract eaas input
    outputThreeConTotal = (parseInt(inputConPrem.value) + parseInt(inputConEaas.value)) * 3;
    quarterlyConTotal.innerText = outputThreeConTotal;
//3 times contract eaas input
    outputThreeVerifPrem = parseInt(inputVerifPrem.value) * 3;
    quarterlyVerifPrem.innerText = outputThreeVerifPrem;
//3 times contract eaas input
    outputThreeVerifEaas = parseInt(inputVerifEaas.value) * 3;
    quarterlyVerifEaas.innerText = outputThreeVerifEaas;
//3 times contract eaas input
    outputThreeVerifTotal = (parseInt(inputVerifPrem.value) + parseInt(inputVerifEaas.value)) * 3;
    quarterlyVerifTotal.innerText = outputThreeVerifTotal;
};

//onclick button to run function on quota after user inputs
document.getElementById('quotaBtn').onclick = function(e){
    plusOperation();
    byThreeOperation();
  };