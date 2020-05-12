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
const profileFieldNameError = profileOverlayContainer.querySelector("#profile-title-input-error");
const profileFieldAboutMe = profileOverlayContainer.querySelector(".form__field_detail");
const profileFieldAboutMeError = profileOverlayContainer.querySelector("#profile-link-input-error"); //todo rename this id field
const profileCancelButton = profileOverlayContainer.querySelector(".overlay__close-button");
const profileForm = profileOverlayContainer.querySelector(".form");
const profileFormSaveButton = profileOverlayContainer.querySelector(".form__save");


// overlay-place elements
const placeOverlayContainer = document.querySelector(".overlay__container_place");
const placePopup = placeOverlayContainer.parentElement;
const placeFieldTitle = placePopup.querySelector(".form__field_title");
const placeFieldTitleError = placeOverlayContainer.querySelector("#place-title-input-error");
const placeFieldLink = placePopup.querySelector(".form__field_detail");
const placeFieldLinkError = placePopup.querySelector("#place-link-input-error");
const placeCancelButton = placePopup.querySelector(".overlay__close-button");
const placeForm = placePopup.querySelector(".form");
const placeFormSaveButton = placeOverlayContainer.querySelector(".form__save");

// overlay-image elements
const imageOverlayContainer = document.querySelector(".overlay__container_image");
const imageOverlay = imageOverlayContainer.parentElement;
const imageOverlayCloseButton = imageOverlay.querySelector(".overlay__close-button");

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
  initialValidationCheck(profileForm, validationSettings);
  // profileFieldName.classList.remove("form__field_error");
  // profileFieldName.classList.remove("form__field_error");
  // profileFieldNameError.classList.remove("form__field-error_active");
  // profileFieldAboutMeError.classList.remove("form__field-error_active");
  // profileFormSaveButton.classList.remove("form__save_inactive");
}

function initPlaceForm() {
  placeFieldTitle.value = null;
  placeFieldLink.value = null;
  initialValidationCheck(placeForm, validationSetting s);
  // placeFieldTitle.classList.remove("form__field_error");
  // placeFieldLink.classList.remove("form__field_error");
  // placeFieldTitleError.classList.remove("form__field-error_active");
  // placeFieldLinkError.classList.remove("form__field-error_active");
  // placeFormSaveButton.classList.add("form__save_inactive");
}

function togglePopup(event, popup) {
  popup.classList.toggle("overlay_opened");
  event.target.dispatchEvent(new Event("input"));
  event.stopPropagation();
}

function submitForm(event) {
  event.preventDefault();
  profileName.textContent = profileFieldName.value;
  profileAboutMe.textContent = profileFieldAboutMe.value;
  togglePopup(profilePopup);
}

function submitPlaceForm(event) {
  event.preventDefault();
  const newElement = {
    name: placeFieldTitle.value,
    link: placeFieldLink.value
  }
  addElement(newElement);
  togglePopup(placePopup);
}

function toggleLike(event) {
  event.preventDefault();
  const likeButton = event.target;
  likeButton.classList.toggle("element__like_liked");
  event.stopPropagation();
}

function removeElement(event) {
  event.preventDefault();
  const removeButton = event.target;
  removeButton.parentElement.remove();
  event.stopPropagation();
}

function openImageOverlay(event, element) {
  event.preventDefault();
  const image = imageOverlay.querySelector(".image");
  const imageTitle = imageOverlay.querySelector(".image__title");

  image.src = element.link;
  image.alt = element.title;
  imageTitle.textContent = element.title;

  togglePopup(event, imageOverlay);
}

function addElement(element) {
  const elementTemplate = document.querySelector("#element__template").content;
  const elementsList = document.querySelector(".elements__list");
  const elementFragment = elementTemplate.cloneNode(true);
  const newElement = elementFragment.querySelector(".element");
  const likeButton = elementFragment.querySelector(".element__like");
  const removeButton = elementFragment.querySelector(".element__remove");
  const elementTitle = newElement.querySelector(".element__title");

  newElement.addEventListener("click", (event) => openImageOverlay(event, element));

  removeButton.addEventListener("click", removeElement);
  likeButton.addEventListener("click", toggleLike);

  newElement.style.backgroundImage = "url('" + element.link + "')";
  elementTitle.textContent = element.name;

  elementsList.prepend(newElement);
}

// load intial cards
initialCards.reverse().forEach(element => addElement(element));


