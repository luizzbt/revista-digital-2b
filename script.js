// script.js

// Filtrar cards por categoria
function filterCards(category) {
  const cards = document.querySelectorAll('.card');
  const buttons = document.querySelectorAll('.filters .btn');

  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  cards.forEach(card => {
    if (category === 'todos' || card.classList.contains(category)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Modal para visualizar sites do GitHub Pages
function openModal(url) {
  const modal = document.getElementById('modal');
  const iframe = document.getElementById('site-frame');
  iframe.src = url;
  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('modal');
  const iframe = document.getElementById('site-frame');
  iframe.src = '';
  modal.style.display = 'none';
}