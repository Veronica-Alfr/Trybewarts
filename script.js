const botaoLogin = document.getElementById('botaoEntrar');

function verificaLogin() {
  let email = document.getElementById('emailLogin');
  let senha = document.getElementById('senhaLogin');
  if(email.value === 'tryber@teste.com' && senha.value === '123456'){
    alert("Olá, Tryber");
  } else {
    alert("Email ou senha inválidos");
  }
}

botaoLogin.addEventListener('click', verificaLogin);