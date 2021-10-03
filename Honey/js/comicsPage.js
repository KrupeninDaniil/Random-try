// блок const
const fullScreenContainer = document.querySelector("div.fullscreen__container"),
    comicsContainer = document.querySelector("div.comics__container"),
    prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.fullscreen__container_image'),
    comicsItems = document.querySelectorAll('.comics__container_item');

// функция открывает и закрывает див с картинками на полном экране
function openFullScreen (event) {
    if (event.target.className === "comics__list-mini") {
        fullScreenContainer.id = "open";
    } else if (event.target.id === "toCloseFull") {
        fullScreenContainer.id = "close";
    } else if (event.target.id === "btn-next" || event.target.id === "btn-prev") {
        return false;
    }
}
//открытие слайда по индексу + кнопки перелистывания
let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active')
}

const nextSlide = () => {
    if(index === slides.length-1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
}

const prevSlide = () => {
    if(index === 0) {
        index = slides.length-1;
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}

comicsItems.forEach((item, indexPicture) =>{
    item.addEventListener('click', () => {
        index = indexPicture;
        activeSlide(index);
    })
})


// блок ивентов
comicsContainer.addEventListener("click", openFullScreen);
fullScreenContainer.addEventListener("click", openFullScreen);
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);