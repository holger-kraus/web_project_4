class Card {
  constructor(imageTitle, imageLink, cardSelector) {
    this._imageTitle = imageTitle;
    this._imageLink = imageLink;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  _setElementEventListener() {
    this._element.addEventListener("click", (event) => {
      event.preventDefault();
      const imageOverlay = document.querySelector(".overlay__container_image").parentElement;
      const image = imageOverlay.querySelector(".image");
      const imageTitle = imageOverlay.querySelector(".image__title");

      image.src = this._imageLink;
      image.alt =  this._imageTitle;
      imageTitle.textContent =  this._imageTitle;

      imageOverlay.classList.toggle("overlay_opened");
      event.stopPropagation();
    });

  }

  _setRemoveButtonEventListener() {
    const removeButton = this._element.querySelector(".element__remove");
    removeButton.addEventListener("click", (event) => {
      event.preventDefault();
      const removeButton = event.target;
      removeButton.parentElement.remove();
      event.stopPropagation();
    });
  }

  _setLikeButtonEventListener() {
    const likeButton = this._element.querySelector(".element__like");
    likeButton.addEventListener("click", (event) => {
      event.preventDefault();
      const likeButton = event.target;
      likeButton.classList.toggle("element__like_liked");
      event.stopPropagation();
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setElementEventListener();
    this._setRemoveButtonEventListener();
    this._setLikeButtonEventListener();

    const elementTitle = this._element.querySelector(".element__title");
    this._element.style.backgroundImage = "url('" + this._imageLink + "')";
    elementTitle.textContent = this._imageTitle;

    return this._element;
  }
}

export {Card};
