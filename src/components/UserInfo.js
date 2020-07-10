export default class UserInfo {

  constructor(nameSelector, aboutMeSelector, avatarSelector) {
    this._name = document.querySelector(nameSelector);
    this._aboutMe = document.querySelector(aboutMeSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      aboutMe: this._aboutMe.textContent
    };
  }

  setUserInfo(name, aboutme) {
    this._name.textContent = name;
    this._aboutMe.textContent = aboutme;
  }

  setUserId(userId) {
    this.userId = userId;
  }

  setAvatar(avatarLink) {
    this._avatar.src = avatarLink;
  }
}
