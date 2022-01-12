const botaoLogin = document.getElementById('botaoEntrar');

function verificaLogin() {
  const email = document.getElementById('emailLogin');
  const senha = document.getElementById('senhaLogin');
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

botaoLogin.addEventListener('click', verificaLogin);

const divAvaliattion = document.getElementById('avaliation-container');

// Ajuda de Raphael Martins
function radio() {
  for (let i = 1; i < 11; i += 1) {
    const label = document.createElement('label');
    const radiosAvaliation = document.createElement('input');
    radiosAvaliation.type = 'radio';
    radiosAvaliation.value = i;
    radiosAvaliation.name = 'rate';
    radiosAvaliation.id = `rate-${i}`;
    label.for = radiosAvaliation.id;
    label.innerHTML = i;
    label.appendChild(radiosAvaliation);
    divAvaliattion.appendChild(label);
  }
}
radio();
