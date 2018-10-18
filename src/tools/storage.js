let storage = {
  get(key) {
    if (key = 'userInfo') {
      return JSON.parse(window.sessionStorage.getItem(key))
    } else {
      return window.sessionStorage.getItem(key);
    }
  },
  set(key, val) {
    window.sessionStorage.setItem(
      key,
      typeof val !== "string" ? JSON.stringify(val) : val
    );
  },
  del(key) {
    window.sessionStorage.removeItem(key);
  },
  cle() {
    window.sessionStorage.clear();
  }
};

export default storage;
