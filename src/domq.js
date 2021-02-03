window.$ = window.domq = function (selectorOrArray) {
  let elements;
  if (typeof selectorOrArray === "string") {
    elements = document.querySelectorAll(selectorOrArray);
  } else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray;
  }

  return {
    addClass(className) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(className);
      }
      return this;
    },
    find(selector) {
      let array = [];
      for (let i = 0; i < elements.length; i++) {
        let elements2 = elements[i].querySelectorAll(selector);
        array.push(...elements2);
      }
      let newApi = domq(array);
      newApi.lastApi = this;
      return newApi;
    },
    lastApi: selectorOrArray.lastApi,
    end() {
      return this.lastApi;
    },
    each(fn) {
      for (let i = 0; i < elements.length; i++) {
        fn.call(null, elements[i], i);
        return this;
      }
    },
    parent() {
      // to do
    },
    children() {
      // to do
    },
  };
};
