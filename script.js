const botaoLogin = document.getElementById('botaoEntrar');
const buttonSubmit = document.getElementById('submit-btn');
const checkboxSubmit = document.getElementById('agreement');

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

const divAvaliation = document.getElementById('avaliation-container');

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
    divAvaliation.appendChild(label);
  }
}
radio();

function submit() {
  if (!checkboxSubmit.checked) {
    buttonSubmit.disabled = true;
  } else {
    buttonSubmit.disabled = false;
  }
}

checkboxSubmit.addEventListener('click', submit);

const textArea = document.getElementById('textarea');
function countCaractere() {
  const texto = document.getElementById('counter');
  const count = 500;
  texto.innerHTML = count - textArea.value.length;
}
textArea.addEventListener('keypress', countCaractere);
textArea.addEventListener('keyup', countCaractere);

function capturaNomeCompleto() {
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const elemento = document.createElement('p');
  elemento.innerText = `Nome: ${nome} ${sobrenome}`;
  return elemento;
}

function capturaEmail() {
  const email = document.getElementById('input-email').value;
  const elemento = document.createElement('p');
  elemento.innerText = `Email: ${email}`;
  return elemento;
}

function capturaInfos() {
  return [
    capturaNomeCompleto(),
    capturaEmail(),
  ];
}

function enviarForm(event) {
  event.preventDefault();
  const form = document.getElementById('evaluation-form');
  const arrElementos = capturaInfos();
  form.innerHTML = '';
  for (let index = 0; index < arrElementos.length; index += 1) {
    form.appendChild(arrElementos[index]);
  }
}

buttonSubmit.addEventListener('click', enviarForm);

// querySelectorAll(‘input[name=family]’)
