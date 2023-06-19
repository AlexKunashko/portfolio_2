import { Modal } from "bootstrap"

let modalInfo
let modalInfoTitle
let modalInfoInstance
let defaultModalInfoHTML

export const initModalInfo = () => {
    modalInfo = document.getElementById('modal-info')
    modalInfoTitle = modalInfo.querySelector('.modal-title')
    modalInfoInstance = new Modal(modalInfo)
    defaultModalInfoHTML = modalInfoTitle.innerHTML
}

export const showModalInfo = (options) => {
    if (options) {
        modalInfoTitle.innerHTML = options.title
    }

    modalInfoInstance.show()

    const handleSetTitleToDefault = () => {
        modalInfoTitle.innerHTML = defaultModalInfoHTML
        modalInfo.removeEventListener('hidden.bs.modal', handleSetTitleToDefault)
    }

    modalInfo.addEventListener('hidden.bs.modal', handleSetTitleToDefault)
}