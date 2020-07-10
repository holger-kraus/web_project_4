import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

  constructor(popupSelector, submitButtonLoadingText, handleFormSubmission) {
    super(popupSelector);
    this._handleFormSubmission = handleFormSubmission;
    this._form = this._popup.querySelector(".form");
    this._submitButton = this._popup.querySelector(".form__save");
    this._submitButtonText = this._submitButton.textContent;
    this._submitButtonLoadingText = submitButtonLoadingText;
    this._titleInputField = this._form.querySelector(".form__field_title");
    this._detailInputField = this._form.querySelector(".form__field_detail");
  }

  _getInputValues() {
    return {
      titleValue: this._titleInputField ? this._titleInputField.value : null,
      detailValue: this._detailInputField ? this._detailInputField.value : null
    };
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
      this._handleFormSubmission(this._getInputValues(), () => {
        this.renderLoading(false);
        this.close();
      });
    });

    this._form.addEventListener("click", (event) => event.stopPropagation());
  }

  open(title, detail) {
    if (this._titleInputField) {
      this._titleInputField.value = title;
      this._titleInputField.dispatchEvent(new Event("input"));
    }
    if (this._detailInputField) {
      this._detailInputField.value = detail;
      this._detailInputField.dispatchEvent(new Event("input"));
    }
    super.open();
  }

  close() {
    super.close();
    this._form.reset();
  }
}
