import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

  constructor(popupSelector, handleFormSubmission) {
    super(popupSelector);
    this._handleFormSubmission = handleFormSubmission;
    this._form = this._popup.querySelector(".form");
    this._titleInputField = this._form.querySelector(".form__field_title");
    this._detailInputField = this._form.querySelector(".form__field_detail");
  }

  _getInputValues() {
    return {
      titleValue: this._titleInputField.value,
      detailValue: this._detailInputField.value
    };
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmission(this._getInputValues());
      this.close();
    });

    this._form.addEventListener("click", (event) => event.stopPropagation());
  }

  open(title, detail) {
    this._titleInputField.value = title;
    this._detailInputField.value = detail;
    // triggering input events for resetting validation information
    this._titleInputField.dispatchEvent(new Event("input"));
    this._detailInputField.dispatchEvent(new Event("input"));
    super.open();
  }

  close() {
    super.close();
    this._form.reset();
  }
}
