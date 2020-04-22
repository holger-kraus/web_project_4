// profile elements
const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__name");
const profileAboutMe = profile.querySelector(".profile__about-me");
const editButton = profile.querySelector(".profile__edit-button");

// popup elements
const popup = document.querySelector(".popup");
const fieldName = popup.querySelector(".form__field_name");
const fieldAboutMe = popup.querySelector(".form__field_about-me");
const cancelButton = popup.querySelector(".form__cancel");
const form = popup.querySelector(".form");

// register listeners
editButton.addEventListener("click", openPopup);
cancelButton.addEventListener("click", closePopup);
form.addEventListener("submit", submitForm);

function openPopup() {
  fieldName.value = profileName.textContent;
  fieldAboutMe.value = profileAboutMe.textContent;
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function submitForm(event) {
  event.preventDefault();
  profileName.textContent =  fieldName.value;
  profileAboutMe.textContent = fieldAboutMe.value;
  closePopup();
}


function addElement(element) {
  const elementTemplate = document.querySelector("#element__template").content;
  const elementsList = document.querySelector(".elements__list");
  const elementFragment = elementTemplate.cloneNode(true);
  const newElement = elementFragment.querySelector(".element");

  newElement.querySelector(".element__title").textContent = element.name;
  newElement.style.backgroundImage = "url('" + element.link + "')";
  elementsList.append(newElement);
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

  initialCards.forEach(element => addElement(element));
}

initializeCards();


