function accordion() {
    const showTab = (elTabBtn) => {
        const elTab = elTabBtn.closest('.uslugi-grid');
        if (elTabBtn.classList.contains('uslugi-menu__item--active')) {
            return;
        }
        console.log(elTab);

        const targetId = elTabBtn.dataset.targetId;
        const elTabPane = elTab.querySelector(`.uslugi-content[data-id="${targetId}"]`);
        if (elTabPane) {
            const elTabBtnActive = elTab.querySelector('.uslugi-menu__item--active');
            elTabBtnActive.classList.remove('uslugi-menu__item--active');
            const elTabPaneShow = elTab.querySelector('.uslugi-content--active');
            elTabPaneShow.classList.remove('uslugi-content--active');
            elTabBtn.classList.add('uslugi-menu__item--active');
            elTabPane.classList.add('uslugi-content--active');
        }
        }

        document.addEventListener('click', (e) => {
        if (e.target && !e.target.closest('.uslugi-menu__item')) {
            return;
        }
        const elTabBtn = e.target.closest('.uslugi-menu__item');
        showTab(elTabBtn);
        });
}

export default accordion;