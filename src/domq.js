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
      let array = [];
      for (let i = 0; i < elements.length; i++) {
        if (array.indexOf(elements[i].parentNode) < 0) {
          array.push(elements[i].parentNode);
        }
      }
      return domq(array);
    },
    children() {
      let array = [];
      for (let i = 0; i < elements.length; i++) {
        let children = elements[i].children;
        array.push(...children);
      }
      return domq(array);
    },
    print() {
      console.log(elements);
    },
  };
};
