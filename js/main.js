'use strict';
const elModal = document.querySelector('.modal');
const elCloseBtn = document.querySelector('.js-close-btn');

if (elCloseBtn) {
    elCloseBtn.addEventListener('click', function () {
        elModal.classList.add('modal-close');
    });
}