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

// commission payout variables
var mOneConPay = document.getElementById("monthOneConPay");
var mTwoConPay = document.getElementById("monthTwoConPay");
var mThreeConPay = document.getElementById("monthThreeConPay");




quotaButton = document.getElementById("quotaBtn");

plusOperationQuota = function () {
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


plusOperationClosedWon = function () {
    //sum of on premise and eaas closed contracts inputs month 1
    sumConSold1 = parseInt(onPCon1.value) + parseInt(eaCon1.value);
    tCon1.innerText = sumConSold1;
//sum of on premise verif and eaas verif user inputs month 1
    sumVerSold1 = parseInt(onPVerN1.value) + parseInt(onPVerR1.value) + parseInt(eaVer1.value);
    tVer1.innerText = sumVerSold1;
//sum of on premise and eaas closed contracts inputs month 2
    sumConSold2 = parseInt(onPCon2.value) + parseInt(eaCon2.value);
    tCon2.innerText = sumConSold2;
//sum of on premise verif and eaas verif user inputs month 2
    sumVerSold2 = parseInt(onPVerN2.value) + parseInt(onPVerR2.value) + parseInt(eaVer2.value);
    tVer2.innerText = sumVerSold2;
//sum of on premise and eaas closed contracts inputs month 3
    sumConSold3 = parseInt(onPCon3.value) + parseInt(eaCon3.value);
    tCon3.innerText = sumConSold3;
//sum of on premise verif and eaas verif user inputs month 3
    sumVerSold3 = parseInt(onPVerN3.value) + parseInt(onPVerR3.value) + parseInt(eaVer3.value);
    tVer3.innerText = sumVerSold3;
    console.log(onPCon1.value);
};



//onclick button to run function on quota after user inputs
document.getElementById('quotaBtn').onclick = function(e){
    plusOperationQuota();
    byThreeOperation();
  };


//   onclick button to run function on closed won monthly user inputs 
document.getElementById('commButton').onclick = function(e){
    plusOperationClosedWon();
    contracts1Comm();
    contracts2Comm();
    contracts3Comm();
  };


// Contract commission functions
// for (let i = 1; i < 4; i++) {
//     const element = array[index];
    
// }
contracts1Comm = function() { 
    if ((sumConSold1/quotaConT)<.6) {
        zeroPay = (sumConSold1 * 0);
        mOneConPay.innerText = zeroPay;
    } else if ((sumConSold1/quotaConT)>=.6 && (sumConSold1/quotaConT)<.8) {
        sevenHalfPay = (sumConSold1 * .075);
        mOneConPay.innerText = sevenHalfPay;
    } else if ((sumConSold1/quotaConT)>=.8 && (sumConSold1/quotaConT)<1) {
        fifteenPay = (sumConSold1 * .15);
        mOneConPay.innerText = fifteenPay;
    } else {
        twentyPay = (sumConSold1 * .2);
        mOneConPay.innerText = twentyPay;
    };
};


contracts2Comm = function() { 
    if ((sumConSold2/quotaConT)<.6) {
        zeroPay = (sumConSold2 * 0);
        mTwoConPay.innerText = zeroPay;
    } else if ((sumConSold2/quotaConT)>=.6 && (sumConSold2/quotaConT)<.8) {
        sevenHalfPay = (sumConSold2 * .075);
        mTwoConPay.innerText = sevenHalfPay;
    } else if ((sumConSold2/quotaConT)>=.8 && (sumConSold2/quotaConT)<1) {
        fifteenPay = (sumConSold2 * .15);
        mTwoConPay.innerText = fifteenPay;
    } else {
        twentyPay = (sumConSold2 * .2);
        mTwoConPay.innerText = twentyPay;
    };
};

contracts3Comm = function() { 
    if ((sumConSold3/quotaConT)<.6) {
        zeroPay = (sumConSold3 * 0);
        mThreeConPay.innerText = zeroPay;
    } else if ((sumConSold3/quotaConT)>=.6 && (sumConSold3/quotaConT)<.8) {
        sevenHalfPay = (sumConSold3 * .075);
        mThreeConPay.innerText = sevenHalfPay;
    } else if ((sumConSold3/quotaConT)>=.8 && (sumConSold3/quotaConT)<1) {
        fifteenPay = (sumConSold3 * .15);
        mThreeConPay.innerText = fifteenPay;
    } else {
        twentyPay = (sumConSold3 * .2);
        mThreeConPay.innerText = twentyPay;
    };
};

// verification commission functions 
if (sumVerSold3/quotaVerifT)



function closeModal() { 
    document.getElementsByClassName("commChart").style.display = "none";   
  };

