document.getElementById('btn-withdrow').addEventListener('click', function(){
  const withdrowInputElement = document.getElementById('input-field-withdrow');
  const withdrowInputAmountString = withdrowInputElement.value;
  const withdrowInputAmount = parseFloat(withdrowInputAmountString);
  
  const previousWithrowElement = document.getElementById('previous-withrow');
  const previousWithrowAmountString = previousWithrowElement.innerText;
  const previousWithrowAmount = parseFloat(previousWithrowAmountString);
  const newWithrowAmount = withdrowInputAmount + previousWithrowAmount;
  if(isNaN(newWithrowAmount)){
    alert('Not a number');
    return;
  }

  const previousBalanceElement = document.getElementById('balance');
  const previousBalanceString = previousBalanceElement.innerText;
  const previousBalanceAmount = parseFloat(previousBalanceString);
  const currentBalanceAmount = previousBalanceAmount - newWithrowAmount;

  withdrowInputElement.value = '';
  
  if(newWithrowAmount > previousBalanceAmount){
    alert("You Don't Have Withrow This Amount");
    return;
  }
  previousBalanceElement.innerText = currentBalanceAmount;
  previousWithrowElement.innerText = newWithrowAmount;
  

  
})