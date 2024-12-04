const face = document.querySelector('.face');
const mouth = document.querySelector('.mouth');
const dahaadh = document.querySelector('.dahaadh');
const dahaadhOne = document.querySelector('.dahaadh-one');


face.addEventListener('click', () => {
    mouth.classList.toggle('show');
    dahaadh.classList.toggle('active');
    dahaadhOne.classList.toggle('active');
});