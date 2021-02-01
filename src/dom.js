window.dom = {};

// 增
dom.create = function (htmlString) {
  let container = document.createElement("template");
  container.innerHTML = htmlString.trim();
  return container.content.firstChild;
};

// 将newNode插到node之后
dom.after = function (node, newNode) {
  node.parentNode.insertBefore(newNode, node.nextSibling);
};
dom.before = function (node, newNode) {
  node.parentNode.insertBefore(newNode, node);
};
dom.append = function (parent, child) {
  parent.appendChild(child);
};
dom.wrap = function (node, parent) {
  this.before(node, parent);
  this.append(parent, node);
};

// 删除节点
dom.remove = function (node) {
  node.parentNode.removeChild(node);
  return node;
};

// 删除后代
dom.empty = function (parent) {
  let deletedNodes = [];
  while (parent.firstChild) {
    deletedNodes.push(parent.firstChild);
    parent.firstChild.remove();
  }
  return deletedNodes;
};

/**
 *
 * @param {node} node
 * @param {string} attrName
 * @param {string} attrValue
 */
dom.attr = function (node, attrName, attrValue) {
  if (arguments.length === 3) {
    node.setAttribute(attrName, attrValue);
  } else if (arguments.length === 2) {
    return node.getAttribute(attrName);
  }
};

dom.text = function (node, string) {
  if (arguments.length === 2) {
    if ("innerText" in node) {
      node.innerText = string;
    } else {
      node.textContent = string;
    }
  } else if (arguments.length === 1) {
    if ("innerText" in node) {
      return node.innerText;
    } else {
      return node.textContent;
    }
  }
};

dom.html = function (node, string) {
  if (arguments.length === 2) {
    node.innerHTML = string;
  } else if (arguments.length === 1) {
    return node.innerHTML;
  }
};

/**
 * 为节点添加样式，或者查询某个节点的某个样式
 * @param {*} node
 * @param {string || Object} name 需要设置的样式名，或者封装好的样式对象
 * @param {string} value
 */
dom.style = function (node, name, value) {
  if (arguments.length === 3) {
    node.style[name] = value;
  } else if (arguments.length === 2) {
    if (typeof name === "string") {
      return node.style[name];
    } else if (name instanceof Object) {
      for (let key in name) {
        node.style[key] = name[key];
      }
    }
  }
};

dom.class = {
  remove: function (node, string) {
    node.classList.remove(string);
  },
  add: function (node, string) {
    node.classList.add(string);
  },
  has: function (node, string) {
    return node.classList.contains(string);
  },
};

/**
 *
 * @param {*} node
 * @param {string} eventName
 * @param {Function} fn
 */
dom.on = function (node, eventName, fn) {
  node.addEventListener(eventName, fn);
};

dom.off = function (node, eventName, fn) {
  node.removeEventListener(eventName, fn);
};

dom.find = function (selector, scope) {
  return (scope || document).querySelectorAll(selector);
};

dom.parent = function (node) {
  return node.parentNode;
};

dom.children = function (node) {
  return node.children;
};

dom.siblings = function (node) {
  return Array.from(node.parentNode.children).filter((n) => n !== node);
};

dom.next = function (node) {
  let x = node.nextSibling;
  console.log(x);
  while (x && x.nodeType === 3) {
    x = x.nextSibling;
  }
  return x;
};

dom.previous = function (node) {
  let x = node.previousSibling;
  while (x && x.nodeType === 3) {
    x = x.previousSibling;
  }
  return x;
};

/**
 * 遍历节点
 * @param {*} nodes
 * @param {Function} fn
 */
dom.each = function (nodes, fn) {
  for (let i = 0; i < nodes.length; i++) {
    fn.call(null, nodes[i]);
  }
};

/**
 * 返回节点在父节点中的index
 * @param {*} node
 */
dom.index = function (node) {
  const list = this.children(node.parentNode);
  for (let i = 0; i < list.length; i++) {
    if (list[i] === node) {
      return i;
    }
  }
};
