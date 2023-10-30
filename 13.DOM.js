// document.getElementById("title");
// document.querySelector("h1"); // Only first H1 Will be given
// document.querySelector("#id");
// document.querySelector(".class");
// document.querySelector("input[type="password"]");
// document.querySelector("div:first-child");
// document.querySelectorAll("h1"); // All tags will be displayed

// document.getElementById("title").innerHTML;
// document.getElementById("title").innerText; // On display none will not show data
// document.getElementById("title").textContent; // Will show all data whatever it is display none or not

// document.getElementById("title").id;
// document.getElementById("title").className;
// document.getElementById("title").getAttribute("id");
// document.getElementById("title").setAttribute("class", "newClass");

// document.getElementById("title").style.backgroundColor = "red";

//! Childs
// const parent = document.querySelector(".parent");
// for (let index = 0; index < parent.children.length; index++) {
//   console.log(parent.children[index].innerText);
// }
// console.log(parent.firstElementChild);
// console.log(child.parentElement);
// console.log(child.nextElementSibling);
// console.log(parent.childNodes);

//! Create Element

// const div = document.createElement("div");
// div.className = "main";
// div.id = Math.random() * 10 + 1;
// div.setAttribute("class", "newClass");
// const child = div.createTextNode("child");
// div.append(child);

//! Edit Element

// function addOptionLanguage(langName) {
//   const li = document.createElement("li");
//   li.appendChild(document.createTextNode(langName));
//   document.querySelector(".language").appendChild(li); //append to ul
// }
// addOptionLanguage("Python");

// const secondLang = document.querySelector("li:nth-child(2)");
// const newLi = document.createElement("li");
// newLi.textContent = "Mojo";
// secondLang.replaceWith(newLi);

//! Remove Element

// const lastLang = document.querySelector("li:first-child");
// lastLang.remove();
