// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.

window.onload = function(){

  // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onclick
  // The click event is raised when the user clicks on an element.

  var checkingBalance = $("#checkingBalance")[0];
  var checkingAmount = $("#checkingAmount");
  var savingsBalance = $("#savingsBalance")[0];
  var savingsAmount = $("#savingsAmount");

  checkingBalance.style.background = "red";
  savingsBalance.style.background = "red";

  $("#checkingDeposit").click(function(event){
    // Any code you put in here will be run when the checkingDeposit button is clicked
    checkingBalance.textContent = "$" + (parseInt(checkingBalance.textContent.slice(1,10)) + parseInt(checkingAmount.val()));
    if (checkingBalance.textContent !== "$0") {
      checkingBalance.style.background = "#E3E3E3";
    }
  });

  $("#savingsDeposit").click(function(event){
    // Any code you put in here will be run when the savingsDeposit button is clicked
    savingsBalance.textContent = "$" + (parseInt(savingsBalance.textContent.slice(1),10) + parseInt(savingsAmount.val()));
    if (savingsBalance.textContent !== "$0") {
      savingsBalance.style.background = "#E3E3E3";
    }
  });

  $("#checkingWithdraw").click(function(event){
    // Any code you put in here will be run when the checkingWithdraw button is clicked
    if ((checkingBalance.textContent.slice(1) - parseInt(checkingAmount.val())) < 0) {
    } else {
      checkingBalance.textContent = "$" + (parseInt(checkingBalance.textContent.slice(1),10) - parseInt(checkingAmount.val()));
    }
    if (checkingBalance.textContent === "$0") {
      checkingBalance.style.background = "red";
    }
  });

  $("#savingsWithdraw").click(function(event){
    // Any code you put in here will be run when the savingsWithdraw button is clicked
    if ((savingsBalance.textContent.slice(1) - parseInt(savingsAmount.val())) <0){
    } else {
      savingsBalance.textContent = "$" + (parseInt(savingsBalance.textContent.slice(1),10) - parseInt(savingsAmount.val()));
    }
    if (savingsBalance.textContent === "$0") {
      savingsBalance.style.background = "red";
    }
  });

};

