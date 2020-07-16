export default class Section {

  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
    this._elementMap = new Map();
  }

  setItem(elementId, element) {
    this._elementMap.set(elementId, element);
    this._container.prepend(element);
  }

  removeItem(elementId) {
    this._elementMap.get(elementId).remove();
    this._elementMap.delete(elementId);
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
}
