$(function(){
  $("#checkingDeposit").click(depositChecking)
  $("#savingsDeposit").click(depositSavings)
  $("#checkingWithdraw").click(withdrawChecking)
  $("#savingsWithdraw").click(withdrawSavings)

  var checkingBalance = $("#checkingBalance")[0];
  var savingsBalance = $("#savingsBalance")[0];
  checkingBalance.style.background = "red";
  savingsBalance.style.background = "red";

})

function depositChecking(){
  var checkingBalance = $("#checkingBalance")[0];
  var checkingAmount = $("#checkingAmount");
  checkingBalance.textContent = "$" + (parseInt(checkingBalance.textContent.slice(1,10)) + parseInt(checkingAmount.val()));
  if (checkingBalance.textContent !== "$0") {
    checkingBalance.style.background = "#E3E3E3";
  }
};

function depositSavings(){
  var savingsBalance = $("#savingsBalance")[0];
  var savingsAmount = $("#savingsAmount");
  savingsBalance.textContent = "$" + (parseInt(savingsBalance.textContent.slice(1),10) + parseInt(savingsAmount.val()));
  if (savingsBalance.textContent !== "$0") {
    savingsBalance.style.background = "#E3E3E3";
  }
};

function withdrawChecking(){
  var checkingBalance = $("#checkingBalance")[0];
  var checkingAmount = $("#checkingAmount");
  if ((checkingBalance.textContent.slice(1) - parseInt(checkingAmount.val())) < 0) {
  } else {
    checkingBalance.textContent = "$" + (parseInt(checkingBalance.textContent.slice(1),10) - parseInt(checkingAmount.val()));
  }
  if (checkingBalance.textContent === "$0") {
    checkingBalance.style.background = "red";
  }
};

function withdrawSavings(){
  var savingsBalance = $("#savingsBalance")[0];
  var savingsAmount = $("#savingsAmount");
  if ((savingsBalance.textContent.slice(1) - parseInt(savingsAmount.val())) <0){
  } else {
    savingsBalance.textContent = "$" + (parseInt(savingsBalance.textContent.slice(1),10) - parseInt(savingsAmount.val()));
  }
  if (savingsBalance.textContent === "$0") {
    savingsBalance.style.background = "red";
  }
};

