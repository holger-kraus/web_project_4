import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

  constructor(popupSelector) {
    super(popupSelector);
  }

  open(title, link) {
    const image = this._popup.querySelector(".image");
    const imageTitle = this._popup.querySelector(".image__title");

    image.src = link;
    image.alt =  title;
    imageTitle.textContent =  title;
    super.open();
  }

}
