const form = document.getElementById("form-contato");

if (form.addEventListener) {
  form.addEventListener("submit", validaCadastro);
} else if (form.attachEvent) {
  form.attachEvent("onsubmit", validaCadastro);
}

function validaCadastro(evt) {
  var nome = document.getElementById('nome');
  var email = document.getElementById('email');
  var WhatsApp = document.getElementById('WhatsApp');
  var nota = document.getElementById('nota');
  var contErro = 0;


  /* Validação do campo nome */
  caixa_nome = document.querySelector('.msg-nome');
  if (nome.value == "") {
    caixa_nome.innerHTML = "Favor preencher o Nome";
    caixa_nome.style.display = 'block';
    contErro += 1;
  } else {
    caixa_nome.style.display = 'none';
  }

  /* Validação do campo email */
  caixa_email = document.querySelector('.msg-email');
  if (email.value == "") {
    caixa_email.innerHTML = "Favor preencher o E-mail";
    caixa_email.style.display = 'block';
    contErro += 1;
  } else if (filtro.test(email.value)) {
    caixa_email.style.display = 'none';
  } else {
    caixa_email.innerHTML = "Formato do E-mail inválido";
    caixa_email.style.display = 'block';
    contErro += 1;
  }


  /* Validação do campo whats */
  caixa_WhatsApp = document.querySelector('.msg-whats');
  if (whats.value == "") {
    caixa_whats.innerHTML = "Favor preencher a Senha";
    caixa_whats.style.display = 'block';
    contErro += 1;
  } else if (whats.value.length < 6) {
    caixa_whats.innerHTML = "Favor preencher a Senha com o mínimo de 6 caracteres";
    caixa_whats.style.display = 'block';
    contErro += 1;
  } else {
    caixa_whats.style.display = 'none';
  }
}

if (contErro > 0) {
  evt.preventDefault();
}
