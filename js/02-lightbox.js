import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

galleryItems.forEach((el) => {
  const a = document.createElement("a");
  a.href = el.original;
  a.classList.add("gallery__item");

  const img = document.createElement("img");
  img.alt = el.description;
  img.src = el.preview;
  img.classList.add("gallery__image");

  a.append(img);
  gallery.append(a);
});

new SimpleLightbox(".gallery__item", {
  captionsData: 'alt',
  captionDelay: 250
});

console.log(galleryItems);
