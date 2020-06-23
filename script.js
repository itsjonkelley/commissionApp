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

//user month closed inputs
//month1
var onPCon1 = document.getElementById("onPCon1");
var eaCon1 = document.getElementById("eaCon1");
var tCon1 = document.getElementById("tCon1");
var onPVer1 = document.getElementById("onPVer1");
var eaVer1 = document.getElementById("eaVer1");
var tVer1 = document.getElementById("tVer1");
//month2
var onPCon2 = document.getElementById("onPCon2");
var eaCon2 = document.getElementById("eaCon2");
var tCon2 = document.getElementById("tCon2");
var onPVer2 = document.getElementById("onPVer2");
var eaVer2 = document.getElementById("eaVer2");
var tVer2 = document.getElementById("tVer2");
//month3
var onPCon3 = document.getElementById("onPCon3");
var eaCon3 = document.getElementById("eaCon3");
var tCon3 = document.getElementById("tCon3");
var onPVer3 = document.getElementById("onPVer3");
var eaVer3 = document.getElementById("eaVer3");
var tVer3 = document.getElementById("tVer3");





quotaButton = document.getElementById("quotaBtn");

plusOperationQuota = function () {
//sum of on premise and eaas user inputs
    quotaConT = parseInt(inputConPrem.value) + parseInt(inputConEaas.value);
    outputConTotal.innerText = quotaConT;
//sum of on premise verif and eaas verif user inputs
    quotaVerifT = parseInt(inputVerifPrem.value) + parseInt(inputVerifEaas.value);
    outputVerifTotal.innerText = quotaVerifT;
//sum of on premise and eaas closed contracts inputs month 1
    sumConSold1 = parseInt(onPCon1.value) + parseInt(eaCon1.value);
    tCon1.innerText = sumConSold1;
//sum of on premise verif and eaas verif user inputs month 1
    sumVerSold1 = parseInt(onPVer1.value) + parseInt(eaVer1.value);
    tVer1.innerText = sumVerSold1;
//sum of on premise and eaas closed contracts inputs month 2
    sumConSold2 = parseInt(onPCon2.value) + parseInt(eaCon2.value);
    tCon2.innerText = sumConSold2;
//sum of on premise verif and eaas verif user inputs month 2
    sumVerSold2 = parseInt(onPVer2.value) + parseInt(eaVer2.value);
    tVer2.innerText = sumVerSold2;
//sum of on premise and eaas closed contracts inputs month 3
    sumConSold3 = parseInt(onPCon3.value) + parseInt(eaCon3.value);
    tCon3.innerText = sumConSold3;
//sum of on premise verif and eaas verif user inputs month 3
    sumVerSold3 = parseInt(onPVer3.value) + parseInt(eaVer3.value);
    tVer3.innerText = sumVerSold3;
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
    plusOperationQuota();
    byThreeOperation();
  };

//   // Get the <span> element that closes the modal
// var spanImg = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// spanImg.onclick = function() { 
//   modal.style.display = "none";
// }