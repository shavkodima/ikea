
export const catalog = () => {
    const btnBurger = document.querySelector('.btn-burger');
    const catalog = document.querySelector('.catalog');
    const btnCloseCatalog = document.querySelector('.btn-close');
    const subCatalog = document.querySelector('.subcatalog');
    const subCatalogHeader = document.querySelector('.subcatalog-header');
    const btnReturn = document.querySelector('.btn-return');


    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    //append - вставляет в конец документа, prepend - вставляет в начало документа
    document.body.append(overlay);

    const openMenu = () => {
        catalog.classList.add('open');
        overlay.classList.add('active')
    };

    const closeMenu = () => {
        catalog.classList.remove('open');
        overlay.classList.remove('active')
        closeSubMenu();
    };

    // Делегирование клика от каталога на элементы li
    const opeSubMenu = (event) => {
        event.preventDefault();
        const target = event.target;
        const itemList = target.closest('.catalog-list__item');
        if (itemList) {
            subCatalogHeader.innerHTML = itemList.innerHTML;
            subCatalog.classList.add('subopen');
        }
    };


    const closeSubMenu = () => {
        subCatalog.classList.remove('subopen');
    };


    btnBurger.addEventListener('click', openMenu);
    btnCloseCatalog.addEventListener('click', closeMenu);
    catalog.addEventListener('click', opeSubMenu);
    btnReturn.addEventListener('click', closeSubMenu);
    overlay.addEventListener('click', closeMenu);
}