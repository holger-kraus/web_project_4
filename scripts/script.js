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


