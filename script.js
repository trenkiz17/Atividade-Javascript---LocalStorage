const modoBtn = document.getElementById('modoBtn');
modoBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  modoBtn.textContent = document.body.classList.contains('dark')
    ? '☀️ Claro'
    : '🌙 Escuro';
});

const cards = document.querySelectorAll('.card');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModal');
const cancelBtn = document.getElementById('cancelBtn');

// --- Abrir modal ao clicar em qualquer card ---
cards.forEach(card => {
  card.addEventListener('click', () => {
    modalOverlay.classList.add('show');
  });
});

// --- Função para fechar modal ---
function closeModal() {
  modalOverlay.classList.remove('show');
}

// --- Fechar clicando nos botões ou fora do modal ---
closeModalBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});

// --- Máscaras ---


function num_telefone() {

  var tel = document.getElementById("tel").value
  console.log(tel)
  tel = tel.slice(0, 14)
  console.log(tel)
  document.getElementById("tel").value = tel
  tel = document.getElementById("tel").value.slice(0, 10)
  console.log(tel)


  var tel_formatado = document.getElementById("tel").value
  if (tel_formatado[0] != "(") {
      if (tel_formatado[0] != undefined) {
          document.getElementById("tel").value = "(" + tel_formatado[0];
      }
  }

  if (tel_formatado[3] != ")") {
      if (tel_formatado[3] != undefined) {
          document.getElementById("tel").value = tel_formatado.slice(0, 3) + ")" + tel_formatado[3]
      }
  }

  if (tel_formatado[9] != "-") {
      if (tel_formatado[9] != undefined) {
          document.getElementById("tel").value = tel_formatado.slice(0, 9) + "-" + tel_formatado[9]
      }
  }
}

function num_cpf() {
  var cpf_formatado = document.getElementById("cpf").value
  if (cpf_formatado[3] != ".") {
      if (cpf_formatado[3] != undefined) {

          document.getElementById("cpf").value = cpf_formatado.slice(0, 3) + "." + cpf_formatado[3];
      }
  }
  if (cpf_formatado[7] != ".") {
      if (cpf_formatado[7] != undefined) {

          document.getElementById("cpf").value = cpf_formatado.slice(0, 7) + "." + cpf_formatado[7];
      }
  }
  if (cpf_formatado[11] != "-") {
      if (cpf_formatado[11] != undefined) {

          document.getElementById("cpf").value = cpf_formatado.slice(0, 11) + "-" + cpf_formatado[11];
      }
  }

}

function num_rg() {
  var rg_formatado = document.getElementById("rg").value
  if (rg_formatado[2] != "-") {
      if (rg_formatado[2] != undefined) {

          document.getElementById("rg").value = rg_formatado.slice(0, 2) + "." + rg_formatado[2];
      }
  }
  if (rg_formatado[7] != ".") {
      if (rg_formatado[7] != undefined) {

          document.getElementById("rg").value = rg_formatado.slice(0, 7) + "." + rg_formatado[7];
      }
  }
  if (rg_formatado[11] != "-") {
      if (rg_formatado[11] != undefined) {

          document.getElementById("rg").value = rg_formatado.slice(0, 11) + "-" + rg_formatado[11];
      }
  }

}




// Aplicar máscaras automaticamente
document.getElementById('telefone').addEventListener('input', e => {
  e.target.value = aplicarMascaraTelefone(e.target.value);
});
document.getElementById('cpf').addEventListener('input', e => {
  e.target.value = aplicarMascaraCPF(e.target.value);
});
document.getElementById('rg').addEventListener('input', e => {
  e.target.value = aplicarMascaraRG(e.target.value);
});

// --- Envio do formulário ---
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Formulário enviado com sucesso!');
  closeModal();
});