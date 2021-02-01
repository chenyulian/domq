// let div2 = dom.create("<div>222</div>");
// let div3 = dom.create("<div>333</div>");
// let div1 = document.querySelector("#div1");
//dom.append(div1, div2);
//dom.wrap(div1, div2);
//let empty = document.querySelector("#empty");
//let array = dom.empty(empty);
//console.log(array);
//dom.text(div4, "this is new content");
dom.html(div4, "<h1>一个标题</h1>");
dom.style(div4, "border", "1px solid red");
dom.style(div4, { border: "1px solid black", color: "blue" });

let classtest = document.querySelector("#classtest");
dom.class.add(classtest, "purple");
dom.class.add(classtest, "orange");
dom.class.remove(classtest, "orange");
let x = dom.class.has(classtest, "purple");
//console.log(`classtest has class purple:` + x);

let eventTest = document.querySelector("#eventTest");
let fn = () => {
  console.log(`点击了eventTest`);
};
dom.on(eventTest, "click", fn);
dom.off(eventTest, "click", fn);

let find = dom.find("#find")[0];
//console.log(find);

let p = dom.find("#parent")[0];
//console.log(dom.children(p));

let ch2 = dom.find("#ch2")[0];
let ch3 = dom.find("#ch3")[0];
//console.log(dom.siblings(ch2));
//console.log(dom.next(ch2));
//console.log(dom.previous(ch2));

dom.each(dom.children(p), (node) => {
  dom.class.add(node, "pink");
});

// let ch2Index = dom.index(ch2);
// console.log(ch2Index);

console.log(dom.index(ch3));
