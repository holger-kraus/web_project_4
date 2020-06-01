import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";

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
const profileName = profile.querySelector(".profile__name");
const profileAboutMe = profile.querySelector(".profile__about-me");
const editButton = profile.querySelector(".profile__edit-button");
const addButton = profile.querySelector(".profile__add-button");

// overlay-place-profile elements
const profileOverlayContainer = document.querySelector(".overlay__container_profile");
const profilePopup = profileOverlayContainer.parentElement;
const profileFieldName = profileOverlayContainer.querySelector(".form__field_title");
const profileFieldAboutMe = profileOverlayContainer.querySelector(".form__field_detail");
const profileCancelButton = profileOverlayContainer.querySelector(".overlay__close-button");
const profileForm = profileOverlayContainer.querySelector(".form");

// overlay-place elements
const placeOverlayContainer = document.querySelector(".overlay__container_place");
const placePopup = placeOverlayContainer.parentElement;
const placeFieldTitle = placePopup.querySelector(".form__field_title");
const placeFieldLink = placePopup.querySelector(".form__field_detail");
const placeCancelButton = placePopup.querySelector(".overlay__close-button");
const placeForm = placePopup.querySelector(".form");

// overlay-image elements
const imageOverlayContainer = document.querySelector(".overlay__container_image");
const imageOverlay = imageOverlayContainer.parentElement;
const imageOverlayCloseButton = imageOverlay.querySelector(".overlay__close-button");

// form validators
const profileFormValidator = new FormValidator(profileForm, validationSettings);
const placeFormValidator = new FormValidator(placeForm, validationSettings);

// register listeners
editButton.addEventListener("click", (event) => {
  initProfileForm();
  togglePopup(event, profilePopup);
});

addButton.addEventListener("click", (event) => {
  initPlaceForm();
  togglePopup(event, placePopup);
});

// listeners for closing the profile popup
profileCancelButton.addEventListener("click", (event) => togglePopup(event, profilePopup));
profilePopup.addEventListener("click", (event) => togglePopup(event, profilePopup));
profileForm.addEventListener("click", (event) => event.stopPropagation());
profilePopup.addEventListener( "keydown", (event) => {
  if (event.key === "Escape") {
    togglePopup(event, profilePopup);
  }
});

// listeners for closing the place popup
placeCancelButton.addEventListener("click", (event) => togglePopup(event, placePopup));
placePopup.addEventListener("click", (event) => togglePopup(event, placePopup));
placeForm.addEventListener("click", (event) => event.stopPropagation());
placePopup.addEventListener( "keydown", (event) => {
  if (event.key === "Escape") {
    togglePopup(event, placePopup);
  }
});

// listeners for closing the image popup
imageOverlayCloseButton.addEventListener("click", (event) => togglePopup(event, imageOverlay));
imageOverlay.addEventListener("click", (event) => togglePopup(event, imageOverlay));
imageOverlayContainer.addEventListener("click", (event) => event.stopPropagation());

// submit listeners
profileForm.addEventListener("submit", submitForm);
placeForm.addEventListener("submit", submitPlaceForm);

function initProfileForm() {
  profileFieldName.value = profileName.textContent;
  profileFieldAboutMe.value = profileAboutMe.textContent;
  profileFormValidator.enableValidation();
}

function initPlaceForm() {
  placeFieldTitle.value = null;
  placeFieldLink.value = null;
  placeFormValidator.enableValidation();
}

function togglePopup(event, popup) {
  popup.classList.toggle("overlay_opened");
  event.stopPropagation();
}

function submitForm(event) {
  event.preventDefault();
  profileName.textContent = profileFieldName.value;
  profileAboutMe.textContent = profileFieldAboutMe.value;
  togglePopup(event, profilePopup);
}

function submitPlaceForm(event) {
  event.preventDefault();
  const newElement = {
    name: placeFieldTitle.value,
    link: placeFieldLink.value
  }
  addElement(newElement);
  togglePopup(event, placePopup);
}

function addElement(element) {
  const newElement = new Card(element.name, element.link, "#element__template").generateCard();
  const elementsList = document.querySelector(".elements__list");
  elementsList.prepend(newElement);
}

// load intial cards
initialCards.reverse().forEach(element => addElement(element));


