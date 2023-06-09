import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const renderedGallery = galleryItems
  .map(
    ({ original, preview, description }) => `
      <div class="gallery__item">
        <a 
          class="gallery__link"
          href="${original}"
        >
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
        </a>
      </div>`
  )
  .join('');

galleryRef.innerHTML = renderedGallery;

galleryRef.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const modal = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`
  );

  modal.show();
  window.addEventListener('keydown', closeModalOnEsc);

  function closeModalOnEsc(e) {
    if (e.keyCode === 27) {
      modal.close();
      window.removeEventListener('keydown', closeModalOnEsc);
    }
  }
});
