export default class Section {

  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  setItem(element) {
    this._container.prepend(element);
  }

  removeItem(elementId) {
    this._container.querySelector(`[data-id='${elementId}']`).remove();
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
}
