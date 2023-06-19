import { Modal } from "bootstrap";
import { showModalInfo } from "./modalInfo";

export const catalog = () => {
    const firstHalfContainer = document.querySelector('.catalog__inner-1');

    const centerIndex = Math.round(data.length / 2)
    const firstHalf = data.slice(0, centerIndex)
    const secondHalf = data.slice(centerIndex, data.length)

    firstHalf.forEach((item, idx) => {
        const node = getProductNode(item, idx)
        firstHalfContainer.appendChild(node)
    });


    const secondHalfContainer = document.querySelector('.catalog__inner-2');
    secondHalf.forEach((item, idx) => {
        const node = getProductNode(item, idx + centerIndex)
        secondHalfContainer.appendChild(node)
    });

    initModalInfo()
}

const getProductNode = (item, idx) => {
    const catalogItem = document.createElement('div');
    catalogItem.classList.add('catalog__item');
    // Создание дочернего дива с изображением
    const catalogItemImg = document.createElement('div');
    var img = document.createElement('img');
    img.src = item.imageMain;
    catalogItemImg.appendChild(img);
    catalogItemImg.classList.add('catalog__item-img');

    // Создание дочернего дива с текстом
    const catalogItemInfo = document.createElement('div');

    // Создание во втором диве header с названием
    const catalogItemInfoHeader = document.createElement('div');
    catalogItemInfoHeader.classList.add('catalog__item-info-header');
    const catalogItemInfoHeaderP = document.createElement('p');
    catalogItemInfoHeaderP.textContent = item.title;
    catalogItemInfo.appendChild(catalogItemInfoHeader);
    catalogItemInfoHeader.appendChild(catalogItemInfoHeaderP);

    // Создание во втором диве text с ифной времени
    const catalogItemInfoTime = document.createElement('div');
    catalogItemInfoTime.classList.add('catalog__item-info-text');
    const catalogItemInfoTimeP = document.createElement('p');
    catalogItemInfoTimeP.textContent = item.infoTime;
    catalogItemInfo.appendChild(catalogItemInfoTime);
    catalogItemInfoTime.appendChild(catalogItemInfoTimeP);

    // Создание во втором диве text с ифной прайса
    const catalogItemInfoPrice = document.createElement('div');
    catalogItemInfoPrice.classList.add('catalog__item-info-text');
    const catalogItemInfoPriceP = document.createElement('p');
    catalogItemInfoPriceP.textContent = item.infoPrice;
    catalogItemInfo.appendChild(catalogItemInfoPrice);
    catalogItemInfoPrice.appendChild(catalogItemInfoPriceP);

    catalogItemInfo.classList.add('catalog__item-info');

    // Создание дочернего дива с кнопкой
    const catalogItemButton = document.createElement('div');
    var button = document.createElement('button');
    button.setAttribute('data-modal-buy', idx)
    button.textContent = `Подробнее`;
    button.classList.add('app-btn');
    catalogItemButton.appendChild(button);
    catalogItemButton.classList.add('catalog__item-button');

    // Добавление всех трех элементов в родительский элемент
    catalogItem.appendChild(catalogItemImg);
    catalogItem.appendChild(catalogItemInfo);
    catalogItem.appendChild(catalogItemButton);

    return catalogItem
}

const initModalInfo = () => {
    const modal = document.getElementById('modal-buy')
    const modalBtns = document.querySelectorAll('[data-modal-buy]')
    const modalInfoBtn = document.getElementById('modal-info-btn-calculate')
    const modalInstance = new Modal(modal)

    const modalChilds = {
        title: modal.querySelector('.modal-body__info h2'),
        info: modal.querySelector('.modal-body__info p'),
        imgMain: modal.querySelector('#modal-body__image-main-img'),
        imgOtherFirst: modal.querySelector('#modal-body__image-other-img-first'),
        imgOtherSecond: modal.querySelector('#modal-body__image-other-img-second'),
        imgOtherThird: modal.querySelector('#modal-body__image-other-img-third'),
        imgOtherFourth: modal.querySelector('#modal-body__image-main-img-fourth'),
    }

    modalBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault()

            const productId = btn.getAttribute('data-modal-buy')
            const product = data[productId]
            if (product) {
                fillModalBody(product, modalChilds)
                modalInstance.show()
                const handleModalInfoBtnClick = (e) => {
                    e.preventDefault()
                    modalInstance.hide()
                    showModalInfo({ title: `Оставьте заявку<br>на подробный просчет<br><b>"${product.title}"</b>` })
                    modalInfoBtn.removeEventListener('click', handleModalInfoBtnClick)
                }

                modalInfoBtn.addEventListener('click', handleModalInfoBtnClick)
            }
        })
    })
}

const fillModalBody = (product, modal) => {

    modal.imgOtherSecond.style.display = "block"
    modal.imgOtherThird.style.display = "block"
    modal.imgOtherFourth.style.display = "block"
    if (!product.infoTime) { product.infoTime = "" }; if (!product.infoPrice) { product.infoPrice = "" }; if (!product.width) { product.width = "" }; if (!product.height) { product.height = "" }; if (!product.depth) { product.depth = "" }; if (!product.material) { product.material = "" }; if (!product.fillingDoorsglass) { product.fillingDoorsglass = "" }; if (!product.profile) { product.profile = "" };
    if (!product.imgOtherSecond) { modal.imgOtherSecond.style.display = "none" } else { modal.imgOtherSecond.src = product.imgOtherSecond; }; if (!product.imgOtherThird) { modal.imgOtherThird.style.display = "none" } else { modal.imgOtherThird.src = product.imgOtherThird; }; if (!product.imgOtherFourth) { modal.imgOtherFourth.style.display = "none" } else { modal.imgOtherFourth.src = product.imgOtherFourth; };
    modal.title.textContent = product.title;
    modal.info.innerHTML = `${product.infoTime} </br> ${product.infoPrice} </br> ${product.width} </br> ${product.height} </br> ${product.depth} </br> ${product.material} </br> ${product.fillingDoorsglass} </br> ${product.profile}`;
    modal.imgMain.src = product.imageMain;
    modal.imgOtherFirst.src = product.imageMain;
}