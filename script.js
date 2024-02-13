//random функция
const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

//найдем кнопку
const btn = document.querySelector('#btn');
//обработчик событий
btn.addEventListener('mouseenter', () => {
    btn.style.left = `${random(0, 90)}%`;
    btn.style.top = `${random(0, 90)}%`;
});

//переменные для "Да"
const ybtn = document.querySelector('#ybtn');
const rbtn = document.querySelector('#reset')
const cat = document.querySelector('#cat_wait');
const description = document.querySelector('#description');

//обработчик событий для "Да"
ybtn.addEventListener('click', () => {
    //изменяем изображение и текст
    cat.src = "/img/cat_two.gif";
    description.textContent = "Я так і знав, цьом цьом 🥰";
    //скрываем кнопку "Нет"
    btn.style.display = 'none';
    ybtn.style.display = 'none';
    rbtn.style.display = 'block';
})

rbtn.addEventListener('click', () => {
    cat.src = "/img/cat_one.gif";
    description.textContent = "Ти будеш моєю кицьою?";
    btn.style.display = 'block';
    ybtn.style.display = 'block';
    rbtn.style.display = 'none';
})
