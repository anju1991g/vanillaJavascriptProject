import "./styles.css";
let addClicked = document.getElementById("add");
addClicked.addEventListener("click", () => {
  let inputVal = document.getElementById("toDoInput").value;
  let li = document.createElement("li");
  let newLi = document.createTextNode(inputVal);
  li.appendChild(newLi);
  if (inputVal === "") {
    alert("You must enter something...");
  } else {
    document.getElementById("myList").appendChild(li);
  }
  document.getElementById("toDoInput").value = "";
  let span = document.createElement("SPAN");
  let text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);
});

let list = document.querySelector("ul");
list.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  },
  false
);

let close = document.getElementsByClassName("close");
console.log(close);
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}
