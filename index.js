let linkSrc = "";

const whatsap = document.querySelector("#whatsap");
whatsap.addEventListener("click", handleClick);

const telegram = document.querySelector("#telegram");
telegram.addEventListener("click", handleClick);

function handleClick(e) {
  e.preventDefault();
  linkSrc = e.target.dataset.source;
  const instance = basicLightbox.create(
    `<img id="modal-whatsap" src=${linkSrc}>`,
    {
      onShow: () => {
        document.body.addEventListener("keydown", closeOnEsc);
      },
      onClose: () => {
        document.body.removeEventListener("keydown", closeOnEsc);
      },
    }
  );
  instance.show();
  function closeOnEsc({ key }) {
    if (key === "Escape") {
      instance.close();
    }
  }
}
