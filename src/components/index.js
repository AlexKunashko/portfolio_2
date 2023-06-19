import { imageGallery } from "./imageGallery"
import { catalog } from "./catalog"
import { slider } from "./slider"
import { initModalInfo } from "./modalInfo"

export default () => document.addEventListener('DOMContentLoaded', () => {
    slider()
    catalog()
    imageGallery()
    initModalInfo()
})
