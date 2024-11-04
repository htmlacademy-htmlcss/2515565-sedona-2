const modalBtnOpen = document.querySelector('.search-link');
const modalBtnClose = document.querySelector('.modal-close-button');
const modal = document.querySelector('.modal-container');


modalBtnOpen.addEventListener('click', showModal);
modalBtnClose.addEventListener('click', closeModal);

// Открывает модальное окно
function showModal() {
  modal.classList.add('open-modal');
};

// Закрывает модальное окно
function closeModal() {
  modal.classList.remove('open-modal');
};
