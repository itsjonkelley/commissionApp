var popQuotaBtn = document.querySelector("#quotaBtn");
var inputConPrem = document.querySelector("#quotaConPrem").value;
inputConPrem = parseInt(inputConPrem);
var inputConEaas = document.querySelector("#quotaConEaas").value;
inputConEaas = parseInt(inputConEaas);
var outputConTotal = document.querySelector("#quotaConTotal");


// parseInt



// function add (x,y){
//     var sumValue = (x+y) 
//     document.getElementById("quotaConTotal").value = sumValue;
// };


document.getElementById('quotaBtn').onclick= function add(inputConPrem,inputConEaas){
    outputConTotal = inputConPrem + inputConEaas
};
// add(inputConPrem, inputConEaas);
// console.log(document.getElementById('quotaBtn').onclick(add(50,100)));
console.log("button clicked");

console.log(inputConPrem);
console.log(inputConEaas);

// document.getElementById('quotaBtn').onclick = function(e){
//     alert('click');
//   }
