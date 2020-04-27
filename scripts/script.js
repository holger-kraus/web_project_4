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

// register listeners
editButton.addEventListener("click", () => {
  profileFieldName.value = profileName.textContent;
  profileFieldAboutMe.value = profileAboutMe.textContent;
  togglePopup(profilePopup);
});

addButton.addEventListener("click", () => {
  placeFieldTitle.value = null;
  placeFieldLink.value = null;
  togglePopup(placePopup);
});

profileCancelButton.addEventListener("click", () => togglePopup(profilePopup));
placeCancelButton.addEventListener("click", () => togglePopup(placePopup));
profileForm.addEventListener("submit", submitForm);
placeForm.addEventListener("submit", submitPlaceForm);
imageOverlayCloseButton.addEventListener("click", () => togglePopup(imageOverlay));

function togglePopup(popup) {
  popup.classList.toggle("overlay_opened");
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

  togglePopup(imageOverlay);
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


