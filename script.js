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


// TELEFONE → (00) 00000-0000
function num_telefone() {
  var tel = document.getElementById("telefone").value;
  tel = tel.slice(0, 15); // limita o tamanho

  // (XX
  if (tel[0] != "(") {
    if (tel[0] != undefined) {
      document.getElementById("telefone").value = "(" + tel[0];
    }
  }

  // (XX)
  if (tel[3] != ")") {
    if (tel[3] != undefined) {
      document.getElementById("telefone").value = tel.slice(0, 3) + ")" + tel[3];
    }
  }

  // (XX) XXXXX-
  if (tel[9] != "-") {
    if (tel[9] != undefined) {
      document.getElementById("telefone").value = tel.slice(0, 9) + "-" + tel[9];
    }
  }
}

// CPF → 000.000.000-00
function num_cpf() {
  var cpf_formatado = document.getElementById("cpf").value;
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

// RG → 00.000.000-0
function num_rg() {
  var rg_formatado = document.getElementById("rg").value;

  if (rg_formatado[2] != ".") {
    if (rg_formatado[2] != undefined) {
      document.getElementById("rg").value = rg_formatado.slice(0, 2) + "." + rg_formatado[2];
    }
  }
  if (rg_formatado[6] != ".") {
    if (rg_formatado[6] != undefined) {
      document.getElementById("rg").value = rg_formatado.slice(0, 6) + "." + rg_formatado[6];
    }
  }
  if (rg_formatado[10] != "-") {
    if (rg_formatado[10] != undefined) {
      document.getElementById("rg").value = rg_formatado.slice(0, 10) + "-" + rg_formatado[10];
    }
  }
}

// Aplica as máscaras enquanto digita
document.getElementById('telefone').addEventListener('input', num_telefone);
document.getElementById('cpf').addEventListener('input', num_cpf);
document.getElementById('rg').addEventListener('input', num_rg);





function enviarInformacoes() {  

  let nome = document.getElementById("nome").value
  let endereco = document.getElementById("endereco").value
  let telefone = document.getElementById("telefone").value
  let cpf = document.getElementById("cpf").value
  let idade = document.getElementById("idade").value
  let rg = document.getElementById("rg").value

  localStorage.setItem("nome",nome)
  localStorage.setItem("endereco",endereco)
  localStorage.setItem("telefone",telefone)
  localStorage.setItem("cpf",cpf)
  localStorage.setItem("idade",idade)
  localStorage.setItem("rg",rg)

  console.log(localStorage.getItem("endereco"))

  
  
}

function pegarInformacoes(){
  let nome = document.getElementById("nome").value
  let endereco = document.getElementById("endereco").value
  let telefone = document.getElementById("telefone").value
  let cpf = document.getElementById("cpf").value
  let idade = document.getElementById("idade").value
  let rg = document.getElementById("rg").value

  localStorage.getItem("nome",nome)
  localStorage.getItem("endereco",endereco)
  localStorage.getItem("telefone",telefone)
  localStorage.getItem("cpf",cpf)
  localStorage.getItem("idade",idade)
  localStorage.getItem("rg",rg)
}


document.addEventListener('DOMContentLoaded', function() {
  if(localStorage.getItem('nome')) {
    document.getElementById('nome').value = localStorage.getItem('nome');
  }
  if(localStorage.getItem('email')) {
    document.getElementById('email').value = localStorage.getItem('email');
  }
});