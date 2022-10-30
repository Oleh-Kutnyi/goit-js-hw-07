import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

galleryItems.forEach((el) => {
  const item = document.createElement("div");
  item.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = el.original;

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = el.preview;
  img.alt = el.description;
  img.dataset.source = el.original;

  link.addEventListener("click", (event) => {
    event.preventDefault();
  });

  link.append(img);
  item.append(link);
  gallery.append(item);
});

document.querySelectorAll(".gallery__image").forEach((element) => {
  element.addEventListener("click", (event) => {
    const instance = basicLightbox.create(
      `
                <img src="${event.target.dataset.source}" alt="${event.target.alt}" />
            `,
      {
        onShow(inst) {
          window.clickHandler = (event) => {
            if (event.code === "Escape") {
              inst.close();
            }
          };
          window.addEventListener("keydown", clickHandler);
        },
        onClose() {
          window.removeEventListener("keydown", window.clickHandler);
        },
      }
    );
    instance.show();
  });
});

