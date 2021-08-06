// This is a singleton class due to nodejs module caching
class Store {
  constructor() {
    this.extremeMode = false;
  }
}

module.exports = new Store();
