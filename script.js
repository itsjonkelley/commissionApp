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
var onPVerN1 = document.getElementById("onPVerN1");
var onPVerR1 = document.getElementById("onPVerR1");
var eaVerN1 = document.getElementById("eaVerN1");
var eaVerR1 = document.getElementById("eaVerR1");
var tVer1 = document.getElementById("tVer1");
//month2
var onPCon2 = document.getElementById("onPCon2");
var eaCon2 = document.getElementById("eaCon2");
var tCon2 = document.getElementById("tCon2");
var onPVerN2 = document.getElementById("onPVerN2");
var onPVerR2 = document.getElementById("onPVerR2");
var eaVerN2 = document.getElementById("eaVerN2");
var eaVerR2 = document.getElementById("eaVerR2");
var tVer2 = document.getElementById("tVer2");
//month3
var onPCon3 = document.getElementById("onPCon3");
var eaCon3 = document.getElementById("eaCon3");
var tCon3 = document.getElementById("tCon3");
var onPVerN3 = document.getElementById("onPVerN3");
var onPVerR3 = document.getElementById("onPVerR3");
var eaVerN3 = document.getElementById("eaVerN3");
var eaVerR3 = document.getElementById("eaVerR3");
var tVer3 = document.getElementById("tVer3");

// commission payout variables
//contract
var mOneConPay = document.getElementById("monthOneConPay");
var mTwoConPay = document.getElementById("monthTwoConPay");
var mThreeConPay = document.getElementById("monthThreeConPay");
var totalComm1 = document.getElementById("month1TotalComm");
//verification new
var mOneNewVPay = document.getElementById("monthOneNewVerifPay");
var mTwoNewVPay = document.getElementById("monthTwoNewVerifPay");
var mThreeNewVPay = document.getElementById("monthThreeNewVerifPay");
var totalComm2 = document.getElementById("month2TotalComm");
//verification repeat
var mOneRepVPay = document.getElementById("monthOneRepeatVerifPay");
var mTwoRepVPay = document.getElementById("monthTwoRepeatVerifPay");
var mThreeRepVPay = document.getElementById("monthThreeRepeatVerifPay");
var totalComm3 = document.getElementById("month3TotalComm");





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
    sumVerSold1 = parseInt(onPVerN1.value) + parseInt(onPVerR1.value) + parseInt(eaVerN1.value) + parseInt(eaVerR1.value);
    tVer1.innerText = sumVerSold1;
//sum of on premise and eaas closed contracts inputs month 2
    sumConSold2 = parseInt(onPCon2.value) + parseInt(eaCon2.value);
    tCon2.innerText = sumConSold2;
//sum of on premise verif and eaas verif user inputs month 2
    sumVerSold2 = parseInt(onPVerN2.value) + parseInt(onPVerR2.value) + parseInt(eaVerN2.value) + parseInt(eaVerR2.value);
    tVer2.innerText = sumVerSold2;
//sum of on premise and eaas closed contracts inputs month 3
    sumConSold3 = parseInt(onPCon3.value) + parseInt(eaCon3.value);
    tCon3.innerText = sumConSold3;
//sum of on premise verif and eaas verif user inputs month 3
    sumVerSold3 = parseInt(onPVerN3.value) + parseInt(onPVerR3.value) + parseInt(eaVerN3.value) + parseInt(eaVerR3.value);
    tVer3.innerText = sumVerSold3;
//sum of New verification
    sumNewOne = parseInt(onPVerN1.value) + parseInt(eaVerN1.value);
    sumNewTwo = parseInt(onPVerN2.value) + parseInt(eaVerN2.value);
    sumNewThree = parseInt(onPVerN3.value) + parseInt(eaVerN3.value);
//sum of Repeart verification
    sumRepOne = parseInt(onPVerR1.value) + parseInt(eaVerR1.value);
    sumRepTwo = parseInt(onPVerR2.value) + parseInt(eaVerR2.value);
    sumRepThree = parseInt(onPVerR3.value) + parseInt(eaVerR3.value);
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
    verifNew1Comm();
    verifNew2Comm();
    verifNew3Comm();
    verifRepeat1Comm();
    verifRepeat2Comm();
    verifRepeat3Comm();
    mon1TotalComm();
    mon2TotalComm();
    mon3TotalComm();
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

// verification commission functions NEW
verifNew1Comm = function () {
    sevenHalfPay = (sumNewOne * .075);
    mOneNewVPay.innerText = sevenHalfPay;
};

verifNew2Comm = function () {
    sevenHalfPay = (sumNewTwo * .075);
    mTwoNewVPay.innerText = sevenHalfPay;
};

verifNew3Comm = function () {
    sevenHalfPay = (sumNewThree * .075);
    mThreeNewVPay.innerText = sevenHalfPay;
};

//verification commission functions REPEAT
verifRepeat1Comm = function () {
    halfPay = (sumRepOne * .05);
    mOneRepVPay.innerText = halfPay;
};

verifRepeat2Comm = function () {
    halfPay = (sumRepTwo * .05);
    mTwoRepVPay.innerText = halfPay;
};

verifRepeat3Comm = function () {
    halfPay = (sumRepThree * .05);
    mThreeRepVPay.innerText = halfPay;
};

mon1TotalComm = function () {
    total1 = (mOneConPay + mOneNewVPay + mOneRepVPay);
    totalComm1.innerText = total1;
};

mon2TotalComm = function () {
    total2 = (mTwoConPay + mTwoNewVPay + mTwoRepVPay);
    totalComm2.innerText = total2;
};
mon3TotalComm = function () {
    total3 = (mThreeConPay + mThreeNewVPay + mThreeRepVPay);
    totalComm3.innerText = total3;
};





// function closeModal() { 
//     document.getElementsByClassName("commChart").style.display = "none";   
//   };

