'use strict';

document.querySelectorAll('.question').forEach((question) => question.addEventListener('click', function () {
    const parentBox = question.closest('.qna-box');
    const answer = parentBox.querySelector('.answer');
    const icon = question.querySelector('.toggle-icon');
    if (answer.classList.contains('collapsed')) {
        answer.classList.remove('collapsed');
        icon.src = 'assets/images/icon-minus.svg'
        icon.alt = 'collapse';
    } else {
        answer.classList.add('collapsed');
        icon.src = 'assets/images/icon-plus.svg'
        icon.alt = 'collapse';
    }
}));