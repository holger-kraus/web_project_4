export default class Card {
  constructor(imageTitle, imageLink, cardSelector, handleCardClick) {
    this._imageTitle = imageTitle;
    this._imageLink = imageLink;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content
      .querySelector(".element")
      .cloneNode(true);
  }

  _setElementEventListener() {
    this._element.addEventListener("click", (event) => {
      this._handleCardClick(this._imageTitle, this._imageLink);
      event.stopPropagation();
    });
  }

  _setRemoveButtonEventListener() {
    const removeButton = this._element.querySelector(".element__remove");
    removeButton.addEventListener("click", (event) => {
      event.preventDefault();
      const clickedButton = event.target;
      clickedButton.parentElement.remove();
      event.stopPropagation();
    });
  }

  _setLikeButtonEventListener() {
    const likeButton = this._element.querySelector(".element__like");
    likeButton.addEventListener("click", (event) => {
      event.preventDefault();
      const clickedButton = event.target;
      clickedButton.classList.toggle("element__like_liked");
      event.stopPropagation();
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setElementEventListener();
    this._setRemoveButtonEventListener();
    this._setLikeButtonEventListener();

    const elementTitle = this._element.querySelector(".element__title");
    this._element.style.backgroundImage = `url('${this._imageLink}')`;
    elementTitle.textContent = this._imageTitle;

    return this._element;
  }
}
