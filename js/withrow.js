document.getElementById('btn-withdrow').addEventListener('click', function(){
  const withdrowInputElement = document.getElementById('input-field-withdrow');
  const withdrowInputAmountString = withdrowInputElement.value;
  const withdrowInputAmount = parseFloat(withdrowInputAmountString);
  
  const previousWithrowElement = document.getElementById('previous-withrow');
  const previousWithrowAmountString = previousWithrowElement.innerText;
  const previousWithrowAmount = parseFloat(previousWithrowAmountString);
  const newWithrowAmount = withdrowInputAmount + previousWithrowAmount;

  const previousBalanceElement = document.getElementById('balance');
  const previousBalanceString = previousBalanceElement.innerText;
  const previousBalanceAmount = parseFloat(previousBalanceString);
  const currentBalanceAmount = previousBalanceAmount - newWithrowAmount;
  previousBalanceElement.innerText = currentBalanceAmount;
  previousWithrowElement.innerText = newWithrowAmount;
  withdrowInputElement.value = '';

  
})