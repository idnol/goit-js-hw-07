import { galleryItems } from './gallery-items.js';

// Change code below this line
const arr = [];
galleryItems.forEach(item => {
    const el = `<li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                  class="gallery__image"
                  src="${item.preview}"
                  data-source="${item.original}"
                  alt="${item.description}"
                />
              </a>
        </li>`;
    arr.push(el)
})
document.querySelector('.gallery').innerHTML = arr.join('');

document.querySelector('.gallery').addEventListener('click', function (e) {
    e.preventDefault();
    if (e.currentTarget !== e.target) {
        const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600" alt="${e.target.getAttribute('alt')}">`);
        instance.show();
        this.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                instance.close();
            }
        });
    }
});