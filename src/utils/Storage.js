let storage = {
  get(key) {
    return window.localStorage.getItem(key);
  },
  set(key, val) {
    window.localStorage.setItem(
      key,
      typeof val !== "string" ? JSON.stringify(val) : val
    );
  },
  del(key) {
    window.localStorage.removeItem(key);
  },
  cle() {
    window.localStorage.clear();
  },
};

export default storage;
