function scroll(){ 

    window.addEventListener('scroll', function(event) {
        // Изменяем стили элемента при прокрутке страницы
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > 50) {
            document.querySelector('.header').classList.add('header-scroll');
        } else {
            document.querySelector('.header').classList.remove('header-scroll');
        }
    });
}

export default scroll;