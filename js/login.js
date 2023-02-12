document.getElementById('btn-submit').addEventListener('click', function(){
  const email = document.getElementById('email-field');
  const emailValue = email.value;
  const password = document.getElementById('password-field');
  const passwordValue = password.value;
  if(emailValue === 'peash@gmail.com' && passwordValue === 'secret'){
    location.href = 'bank.html';
  }
  else{
    alert('Wrong User Name or Password')
  }
});
