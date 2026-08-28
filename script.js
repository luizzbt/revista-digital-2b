// script.js

const estudantes = [
  { nome: "ALEX", url: "010alex.github.io/010alex-IFA-2.0/" },
  { nome: "BIANCA", url: "https://fdmalu.github.io/IFA2B/" },
  { nome: "CAIQUE", url: "https://caiqueoliveiracamargo-bot.github.io/caique02/" },
  { nome: "DAVI", url: "https://asimovhdmi.github.io/PROJETO-IFA-FISICA-II/" },
  { nome: "ELOISA", url: "https://fdmalu.github.io/IFA2B/" },
  { nome: "LUCAS", url: "https://github.com/AsimovHDMI/PROJETO-IFA-FISICA-II" },
  { nome: "MARIA LUIZA", url: "https://fdmalu.github.io/IFA2B/" },
  { nome: "NICOLAS", url: "https://nicko-lab.github.io/FlashCards/" },
  { nome: "RENAN SANTOS", url: "https://renansilva22-jpg.github.io/renanproject/" },
  { nome: "TESSÁLIA", url: "https://github.com/fdmalu/IFA2B" },
  { nome: "Estudante 11", url: "https://usuario11.github.io/projeto" },
  { nome: "Estudante 12", url: "https://usuario12.github.io/projeto" },
  { nome: "Estudante 13", url: "https://usuario13.github.io/projeto" },
  { nome: "Estudante 14", url: "https://usuario14.github.io/projeto" },
  { nome: "Estudante 15", url: "https://usuario15.github.io/projeto" },
  { nome: "Estudante 16", url: "https://usuario16.github.io/projeto" },
  { nome: "Estudante 17", url: "https://usuario17.github.io/projeto" },
  { nome: "Estudante 18", url: "https://usuario18.github.io/projeto" },
  { nome: "Estudante 19", url: "https://usuario19.github.io/projeto" },
  { nome: "Estudante 20", url: "https://usuario20.github.io/projeto" },
  { nome: "Estudante 21", url: "https://usuario21.github.io/projeto" },
  { nome: "Estudante 22", url: "https://usuario22.github.io/projeto" },
  { nome: "Estudante 23", url: "https://usuario23.github.io/projeto" },
  { nome: "Estudante 24", url: "https://usuario24.github.io/projeto" },
  { nome: "Estudante 25", url: "https://usuario25.github.io/projeto" },
  { nome: "Estudante 26", url: "https://usuario26.github.io/projeto" },
  { nome: "Estudante 27", url: "https://usuario27.github.io/projeto" },
  { nome: "Estudante 28", url: "https://usuario28.github.io/projeto" },
  { nome: "Estudante 29", url: "https://usuario29.github.io/projeto" },
  { nome: "Estudante 30", url: "https://usuario30.github.io/projeto" },
  { nome: "Estudante 31", url: "https://usuario31.github.io/projeto" },
  { nome: "Estudante 32", url: "https://usuario32.github.io/projeto" }
];

const container = document.getElementById('grid-estudantes');

estudantes.forEach(aluno => {
  const card = document.createElement('div');
  card.className = 'card-estudante';
  
  card.innerHTML = `
    <h2>${aluno.nome}</h2>
    <button class="btn-projeto" onclick="openModal('${aluno.url}')">Ver Projeto</button>
  `;
  
  container.appendChild(card);
});

function openModal(url) {
  const modal = document.getElementById('modal');
  const iframe = document.getElementById('iframe-projeto');
  iframe.src = url;
  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('modal');
  const iframe = document.getElementById('iframe-projeto');
  iframe.src = '';
  modal.style.display = 'none';
}