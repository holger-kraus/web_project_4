import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {

  constructor(popupSelector, submitButtonLoadingText, handleConfirmation) {
    super(popupSelector);
    this._handleConfirmation = handleConfirmation;
    this._form = this._popup.querySelector(".form");
    this._submitButton = this._popup.querySelector(".form__save");
    this._submitButtonText = this._submitButton.textContent;
    this._submitButtonLoadingText = submitButtonLoadingText;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent =  this._submitButtonLoadingText;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.renderLoading(true);
      this._handleConfirmation(this._currentObject, () => {
        this.renderLoading(false);
        this.close();
      });
    });

    this._form.addEventListener("click", (event) => event.stopPropagation());
  }

  open(currentObject) {
    this._currentObject = currentObject;
    super.open();
  }

  close() {
    super.close();
    this._form.reset();
  }
}
