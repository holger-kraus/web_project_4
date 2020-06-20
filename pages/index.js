import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";

// cards, that will be initially loaded
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanois National Park",
    link: "https://code.s3.yandex.net/web-code/vanois.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

// validation settings
const validationSettings = {
  formSelector: ".form",
  inputSelector: ".form__field",
  submitButtonSelector: ".form__save",
  inactiveButtonClass: "form__save_inactive",
  inputErrorClass: "form__field_error",
  errorClass: "form__field-error_active"
}

// profile elements
const profile = document.querySelector(".profile");
const editButton = profile.querySelector(".profile__edit-button");
const addButton = profile.querySelector(".profile__add-button");
const userInfo = new UserInfo(".profile__name", ".profile__about-me");

// overlay profile elements
const handleProfileSubmit = function (event, fieldValues) {
  event.preventDefault();
  userInfo.setUserInfo(fieldValues.titleValue, fieldValues.detailValue);
}
const profileFormPopup = new PopupWithForm(".overlay_profile", handleProfileSubmit);
profileFormPopup.setEventListeners();

const profileOverlayContainer = document.querySelector(".overlay__container_profile");
const profileForm = profileOverlayContainer.querySelector(".form");
new FormValidator(profileForm, validationSettings).enableValidation();

// overlay place elements
const handlePlaceSubmit = function (event, fieldValues) {
  event.preventDefault();
  const handleCardClick = (event) => {
    event.preventDefault();
    imagePopup.open(fieldValues.titleValue, fieldValues.detailValue);
    event.stopPropagation();
  }
  const newCard = new Card(fieldValues.titleValue, fieldValues.detailValue, "#element__template", handleCardClick).generateCard();
  cardList.setItem(newCard);
}
const placeFormPopup = new PopupWithForm(".overlay_place", handlePlaceSubmit);
placeFormPopup.setEventListeners();

const placeOverlayContainer = document.querySelector(".overlay__container_place");
const placeForm = placeOverlayContainer.querySelector(".form");
new FormValidator(placeForm, validationSettings).enableValidation();

// register open form listeners
editButton.addEventListener("click", (event) => {
  const {name, aboutMe} = userInfo.getUserInfo();
  profileFormPopup.open(name, aboutMe);
});

addButton.addEventListener("click", (event) => {
  placeFormPopup.open(null, null);
});

// overlay image elements
const imagePopup = new PopupWithImage(".overlay_image");
imagePopup.setEventListeners();

const cardList = new Section({
    items: initialCards.reverse(),
    renderer: card => {
      const handleCardClick = (event) => {
        event.preventDefault();
        imagePopup.open(card.name, card.link);
        event.stopPropagation();
      }
      const newCard = new Card(card.name, card.link, "#element__template", handleCardClick).generateCard();
      cardList.setItem(newCard);
    }
  },
  ".elements__list");

cardList.renderItems();


