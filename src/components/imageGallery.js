export const imageGallery = () => {
    let displayedImage = document.querySelector('.modal-body__image-main img');
    let thumbBar = document.querySelector('.modal-body__image-other');
    thumbBar.addEventListener('click', function (e) {
        if (e.target && e.target.nodeName == "IMG") {
            let newSrc = e.target.getAttribute('src');
            displayedImage.setAttribute('src', newSrc);
            let currentActive = document.querySelector('.active');
            currentActive.classList.remove('active');
            e.target.classList.add('active');
        }
    });
}