'use strict';

const elNotificationBtn = document.querySelector('.notification-btn');
const elModal = document.querySelector('.modal');
const elCloseBtn = document.querySelector('.js-close-btn');

elNotificationBtn.addEventListener('click', function () {
    elModal.classList.add('modal-show');
});

elCloseBtn.addEventListener('click', function () {
    elModal.classList.remove('modal-show');
});