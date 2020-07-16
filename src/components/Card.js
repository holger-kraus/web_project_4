export default class Card {
  constructor(cardId, profileId, imageTitle, imageLink, likedBy, cardSelector,
              handleCardClick, handleRemoveCard, handleLike, handleDislike) {
    this._cardId = cardId;
    this._profileId = profileId;
    this._imageTitle = imageTitle;
    this._imageLink = imageLink;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleRemoveCard = handleRemoveCard;
    this._likedBy = likedBy;
    this._handleLike = handleLike;
    this._handleDislike = handleDislike;
    this._element = this._getTemplate();
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
      this._handleRemoveCard(this._cardId);
      event.stopPropagation();
    });
  }

  _setLikeButtonEventListener() {
    const thisCard = this;
    const likeButton = this._element.querySelector(".element__like-button");
    likeButton.addEventListener("click", (event) => {
      event.preventDefault();
      const clickedButton = event.target;
      if (clickedButton.classList.contains("element__like_liked")) {
        this._handleDislike(this._cardId, thisCard);
      } else {
        this._handleLike(this._cardId, thisCard);
      }
      event.stopPropagation();
    });
  }

  addLike(likedBy) {
    this._likedBy = likedBy;
    const elementLikeCount = this._element.querySelector(".element__like-count");
    const elementLikeButton = this._element.querySelector(".element__like-button");
    elementLikeCount.textContent = this._likedBy.length;
    elementLikeButton.classList.add("element__like_liked");
  }

  removeLike(likedBy) {
    this._likedBy = likedBy;
    const elementLikeCount = this._element.querySelector(".element__like-count");
    const elementLikeButton = this._element.querySelector(".element__like-button");
    elementLikeCount.textContent = this._likedBy.length;
    elementLikeButton.classList.remove("element__like_liked");
  }

  removeCard() {
    this._element.remove();
  }

  generateCard() {
    this._setElementEventListener();
    this._setRemoveButtonEventListener();
    this._setLikeButtonEventListener();

    const elementTitle = this._element.querySelector(".element__title");
    const elementLikeCount = this._element.querySelector(".element__like-count");
    const elementLikeButton = this._element.querySelector(".element__like-button");
    this._element.style.backgroundImage = `url('${this._imageLink}')`;
    elementTitle.textContent = this._imageTitle;
    elementLikeCount.textContent = this._likedBy.length;

    // check if the profile owner liked the card before
    // and adjust the like button accordingly
    if (this._likedBy.includes(this._profileId)) {
      elementLikeButton.classList.add("element__like_liked");
    }

    return this._element;
  }
}
