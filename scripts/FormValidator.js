class FormValidator {
  constructor(form, settings) {
    this._settings = settings;
    this._form = form;
    this._initFormValidation();
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.classList.remove(this._settings.errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._settings.inactiveButtonClass);
    } else {
      buttonElement.classList.remove(this._settings.inactiveButtonClass);
    }
  }

  _initFormValidation() {
    const inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    const buttonElement = this._form.querySelector(this._settings.submitButtonSelector);
    const outerThis = this;

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        outerThis._checkInputValidity(inputElement);
        outerThis._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  enableValidation() {
    // I tried to fulfil the interface definition of the project description. My assumption
    // is that the original intention might have been to do in this method what I am doing
    // in _initFormValidation, but I need at least one public method that I can call
    // everytime I open a form, so I decided to implement this here. But if you
    // prefer I could of course also move the stuff from _initFormValidation here and
    // implement a second public method here. For me it was not clear from the
    // project description if we were allowed to have more than one public method
    const inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    const buttonElement = this._form.querySelector(this._settings.submitButtonSelector);

    // After opening the popup I don't want to show errors
    inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });

    // The submit button should have a state which represents what you really can do with it
    this._toggleButtonState(inputList, buttonElement);
  }
}

export {FormValidator};
