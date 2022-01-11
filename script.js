const botaoLogin = document.getElementById('botaoEntrar');

function verificaLogin() {
  const email = document.getElementById('emailLogin');
  const senha = document.getElementById('senhaLogin');
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber');
  } else {
    alert('Email ou senha inválidos');
  }
}

botaoLogin.addEventListener('click', verificaLogin);
