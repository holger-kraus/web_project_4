import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-1",
  headers: {
    "Authorization": "cf0daf24-499f-4e4d-a691-bc6825f65b5e",
    "Content-Type": "application/json"
  }
});

// validation settings
const validationSettings = {
  formSelector: ".form",
  inputSelector: ".form__field",
  submitButtonSelector: ".form__save",
  inactiveButtonClass: "form__save_inactive",
  inputErrorClass: "form__field_error",
  errorClass: "form__field-error_active"
}

// overlay image elements
const imagePopup = new PopupWithImage(".overlay_image");
imagePopup.setEventListeners();

// create section
const cardList = new Section({
  items: [], renderer: () => {
  }
}, ".elements__list");

// profile elements
const profile = document.querySelector(".profile");
const editButton = profile.querySelector(".profile__edit-button");
const addButton = profile.querySelector(".profile__add-button");
const profileAvatarButton = profile.querySelector(".profile__avatar");
const userInfo = new UserInfo(".profile__name", ".profile__about-me", ".profile__avatar-image");

// overlay profile description
const handleProfileSubmit = (fieldValues, finalAction) => {
  api.updateProfile(fieldValues.titleValue, fieldValues.detailValue)
    .then((profile) => {
      userInfo.setUserInfo(profile.name, profile.about);
    }).catch((err) => {
    console.log(err);
  }).finally(finalAction);
};
const profileFormPopup = new PopupWithForm(".overlay_profile", "Saving...", handleProfileSubmit);
profileFormPopup.setEventListeners();

const profileOverlayContainer = document.querySelector(".overlay__container_profile");
const profileForm = profileOverlayContainer.querySelector(".form");
new FormValidator(profileForm, validationSettings).enableValidation();

// overlay profile avatar
const handleProfileAvatarSubmit = (fieldValues, finalAction) => {
  api.updateProfilePicture(fieldValues.titleValue)
    .then((profile) => {
      userInfo.setAvatar(profile.avatar);
    }).catch((err) => {
    console.log(err);
  }).finally(finalAction);
};
const profileAvatarFormPopup = new PopupWithForm(".overlay_avatarpic ", "Saving...", handleProfileAvatarSubmit);
profileAvatarFormPopup.setEventListeners();

const profileAvatarContainer = document.querySelector(".overlay__container_avatarpic");
const profileAvatarForm = profileAvatarContainer.querySelector(".form");
new FormValidator(profileAvatarForm, validationSettings).enableValidation();

const deleteCard = (card, finalAction) => {
  api.deleteCard(card._cardId)
    .then(() => {
      card.removeCard();
    }).catch((err) => {
    console.log(err);
  }).finally(() => {
      finalAction();
    }
  );
}
const confirmationFormPopup = new PopupWithConfirmation(".overlay_confirmation", "Deleting...", deleteCard);
confirmationFormPopup.setEventListeners();

const handleLike = (cardId, card) => {
  api.addLike(cardId).then((updatedCard) => {
    const likedBy = updatedCard.likes.map((like) => like._id);
    card.addLike(likedBy);
  })
    .catch((err) => {
      console.log(err);
    });
}

const handleDislike = (cardId, card) => {
  api.deleteLike(cardId).then((updatedCard) => {
    const likedBy = updatedCard.likes.map((like) => like._id);
    card.removeLike(likedBy);
  })
    .catch((err) => {
      console.log(err);
    });
}

// overlay place elements
const addCard = (cardId, title, link, likedBy) => {
  const handleCardClick = (imageTitle, imageLink) => {
    imagePopup.open(imageTitle, imageLink);
  };
  const handleRemoveCard = (card) => {
    confirmationFormPopup.open(card);
  }
  const newCard = new Card(cardId, userInfo.userId, title, link, likedBy, "#element__template", handleCardClick, handleRemoveCard, handleLike, handleDislike).generateCard();
  cardList.setItem(newCard);
};

const handlePlaceSubmit = (fieldValues, finalAction) => {
  api.addCard(fieldValues.titleValue, fieldValues.detailValue)
    .then((card) => {
      const likedBy = card.likes.map((like) => like._id);
      addCard(card._id, card.name, card.link, likedBy);
    }).catch((err) => {
    console.log(err);
  }).finally(finalAction);
}
const placeFormPopup = new PopupWithForm(".overlay_place", "Saving...", handlePlaceSubmit);
placeFormPopup.setEventListeners();

const placeOverlayContainer = document.querySelector(".overlay__container_place");
const placeForm = placeOverlayContainer.querySelector(".form");
new FormValidator(placeForm, validationSettings).enableValidation();

// register open form listeners
editButton.addEventListener("click", () => {
  const {name, aboutMe} = userInfo.getUserInfo();
  profileFormPopup.open(name, aboutMe);
});

addButton.addEventListener("click", () => {
  placeFormPopup.open(null, null);
});

profileAvatarButton.addEventListener("click", () => {
  profileAvatarFormPopup.open("", "")
})

// load profile and intial cards in parallel to increase speed
// but also assuring that we have the profile id when we create the cards
Promise.all([api.getProfile(), api.getInitialCards()])
  .then((results) => {
    const profile = results[0];
    const cards = results[1];
    userInfo.setUserInfo(profile.name, profile.about);
    userInfo.setAvatar(profile.avatar);
    userInfo.setUserId(profile._id);

    cards.forEach((card) => {
      const likedBy = card.likes.map((like) => like._id);
      addCard(card._id, card.name, card.link, likedBy);
    });
  }
).catch((err) => {
  console.log(err);
});


