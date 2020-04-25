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
editButton.addEventListener("click", openProfilePopup);
addButton.addEventListener("click", openPlacePopup);
profileCancelButton.addEventListener("click", closeProfilePopup);
profileForm.addEventListener("submit", submitForm);
placeCancelButton.addEventListener("click", closePlacePopup);
placeForm.addEventListener("submit", submitPlaceForm);
imageOverlayCloseButton.addEventListener("click", closeImageOverlay);

function openProfilePopup() {
  profileFieldName.value = profileName.textContent;
  profileFieldAboutMe.value = profileAboutMe.textContent;
  profilePopup.classList.add("overlay_opened");
}

function closeProfilePopup() {
  profilePopup.classList.remove("overlay_opened");
}

function openPlacePopup() {
  placeFieldTitle.value = null;
  placeFieldLink.value = null;
  placePopup.classList.add("overlay_opened");
}

function closePlacePopup() {
  placePopup.classList.remove("overlay_opened");
}

function submitForm(event) {
  event.preventDefault();
  profileName.textContent = profileFieldName.value;
  profileAboutMe.textContent = profileFieldAboutMe.value;
  closeProfilePopup();
}

function submitPlaceForm(event) {
  event.preventDefault();
  const newElement = {
    name: placeFieldTitle.value,
    link: placeFieldLink.value
  }
  addElement(newElement);
  closePlacePopup();
}

function toggleLike(event) {
  const likeButton = event.target;
  likeButton.classList.toggle("element__like_liked");
}

function removeElement(event) {
  const removeButton = event.target;
  removeButton.parentElement.remove();
}

function closeImageOverlay() {
  debugger;
  imageOverlay.classList.remove("overlay_opened");
}

function openImageOverlay(event) {
  const selectedImage = event.target;
  const selectedImageTitle = selectedImage.querySelector(".element__title");
  const image = imageOverlay.querySelector(".image");
  const imageTitle = imageOverlay.querySelector(".image__title");

  image.src = selectedImage.style.backgroundImage.slice(5, -2);
  image.alt = selectedImageTitle.textContent;
  imageTitle.textContent = selectedImageTitle.textContent;

  imageOverlay.classList.add("overlay_opened");
}

function addElement(element) {
  const elementTemplate = document.querySelector("#element__template").content;
  const elementsList = document.querySelector(".elements__list");
  const elementFragment = elementTemplate.cloneNode(true);
  const newElement = elementFragment.querySelector(".element");
  const likeButton = elementFragment.querySelector(".element__like");
  const removeButton = elementFragment.querySelector(".element__remove");
  const elementTitle = newElement.querySelector(".element__title");

  newElement.addEventListener("click", openImageOverlay);
  removeButton.addEventListener("click", removeElement);
  likeButton.addEventListener("click", toggleLike);

  newElement.style.backgroundImage = "url('" + element.link + "')";
  elementTitle.textContent = element.name;

  elementsList.prepend(newElement);
}

function initializeCards() {

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

  initialCards.reverse().forEach(element => addElement(element));
}

initializeCards();


