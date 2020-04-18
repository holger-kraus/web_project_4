// profile elements
const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__name");
const profileAboutMe = profile.querySelector(".profile__about-me");
const editButton = profile.querySelector(".profile__edit-button");
editButton.addEventListener("click", openPopup);

// popup elements
const popup = document.querySelector(".popup");
const fieldName = popup.querySelector(".form__field_name");
const fieldAboutMe = popup.querySelector(".form__field_about-me");

const cancelButton = popup.querySelector(".form__cancel");
cancelButton.addEventListener("click", closePopup);

const form = popup.querySelector(".form");
form.addEventListener("submit", submitForm);

function openPopup() {
  fieldName.value = profileName.innerText;
  fieldAboutMe.value = profileAboutMe.innerText;
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function submitForm(event) {
  event.preventDefault();
  profileName.innerHTML =  fieldName.value;
  profileAboutMe.innerHTML = fieldAboutMe.value;
  closePopup();
}


