// create all elements
let div = document.createElement("div");
let btn = document.createElement("button");
let body = document.querySelector("body");
let btnCancel = document.createElement("button");

// class name
div.classList.add("modal")
btn.classList.add("open_btn")
btnCancel.classList.add("close_btn")
body.classList.add("page")


// elements add text
btn.textContent = "Open";
btnCancel.textContent = "Close";
div.textContent = "Welcome";

// include elements
body.append(btn);
body.append(div);
div.append(btnCancel);

// click open
btn.onclick = () => {
  btnCancel.style.display = "block";
  div.style.display = "block";
  btn.style.backgroundColor = 'hwb(0 35% 65% / 0.0)'
  btn.style.transition = '0s'
  btn.style.color = 'green'
  body.style.backgroundColor = 'hwb(0 35% 65% / 0.576)'

};
// click close
btnCancel.onclick = () => {
  div.style.display = "none";
  body.style.backgroundColor = 'white'
  btn.style.backgroundColor = 'green'
  btn.style.color = 'white'

};


// Deyişiklik olsun deye (remove) dan deil "displayden" isdifade etdim