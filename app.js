const btns = document.querySelectorAll('.question-btn');
const questions = document.querySelectorAll('.question');


btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    });
});

