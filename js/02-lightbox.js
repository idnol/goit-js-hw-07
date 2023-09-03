import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = galleryItems.map(item => {
    return `<li class="gallery__item">
               <a class="gallery__link" href="${item.original}">
                  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
               </a>
            </li>`;
}).join('');

document.querySelector('.gallery').insertAdjacentHTML('beforeend', gallery);

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});

