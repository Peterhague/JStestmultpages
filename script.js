let bodyIndex = document.getElementById("body-index");
let bodyTest = document.getElementById("body-test");
let para = document.createElement("p");
let paraTwo = document.createElement("p");
para.innerHTML = "paragraph";
paraTwo.innerHTML = "second paragraph";
bodyTest.appendChild(para);
bodyIndex.appendChild(paraTwo);
