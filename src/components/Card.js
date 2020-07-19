export default class Card {
  constructor(cardId, profileId, ownerId, imageTitle, imageLink, likedByList, cardSelector,
              handleCardClick, handleRemoveCard, handleLike, handleDislike) {
    this._cardId = cardId;
    this._profileId = profileId;
    this._ownerId = ownerId;
    this._imageTitle = imageTitle;
    this._imageLink = imageLink;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleRemoveCard = handleRemoveCard;
    this._likedByList = likedByList;
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

  addLike(likedByList) {
    this._likedByList = likedByList;
    const elementLikeCount = this._element.querySelector(".element__like-count");
    const elementLikeButton = this._element.querySelector(".element__like-button");
    elementLikeCount.textContent = this._likedByList.length;
    elementLikeButton.classList.add("element__like_liked");
  }

  removeLike(likedByList) {
    this._likedByList = likedByList;
    const elementLikeCount = this._element.querySelector(".element__like-count");
    const elementLikeButton = this._element.querySelector(".element__like-button");
    elementLikeCount.textContent = this._likedByList.length;
    elementLikeButton.classList.remove("element__like_liked");
  }

  generateCard() {
    this._setElementEventListener();
    this._setRemoveButtonEventListener();
    this._setLikeButtonEventListener();

    const elementTitle = this._element.querySelector(".element__title");
    const elementLink = this._element.querySelector(".element__link");
    const elementRemoveButton = this._element.querySelector(".element__remove");
    const elementLikeCount = this._element.querySelector(".element__like-count");
    const elementLikeButton = this._element.querySelector(".element__like-button");
    elementLink.style.backgroundImage = `url('${this._imageLink}')`;
    elementTitle.textContent = this._imageTitle;
    elementLikeCount.textContent = this._likedByList.length;
    this._element.dataset.id= this._cardId;

    // check if the profile owner liked the card before
    // and adjust the like button accordingly
    if (this._likedByList.includes(this._profileId)) {
      elementLikeButton.classList.add("element__like_liked");
    }

    if (this._profileId !== this._ownerId) {
      elementRemoveButton.classList.add("element__remove_hide");
    }

    return this._element;
  }
}
