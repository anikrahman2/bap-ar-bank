document.getElementById('btn-deposit').addEventListener('click', function(){
  const depositField = document.getElementById('input-field-deposit');
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  if(isNaN(newDepositAmount)){
    alert('Not a number');
    return;
  }
  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositTotalText = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalText);
  const currentDepositTotal = previousDepositTotal + newDepositAmount;

  const balanceElement = document.getElementById('balance');
  const balanceAmountString = balanceElement.innerText;
  const currentBalanceAmount = parseFloat(balanceAmountString);
  const newBalanceAmount = currentBalanceAmount + newDepositAmount;
  balanceElement.innerText = newBalanceAmount;
  depositTotalElement.innerText = currentDepositTotal;
  depositField.value = '';
});