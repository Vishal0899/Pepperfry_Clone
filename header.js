// ------------Search Bar Onclick Functionallity------------------

let search_input = document.getElementById("search");
search_input.addEventListener("click", () => {
  search_input.placeholder = "What are you looking for?";
  search_input.style.border = "none";
});

// ------------Fixed Lower to Top Onclick Functionallity--------------

var mybutton = document.getElementById("top_btn");
window.onscroll = function () {
  scrollFunc();
};

function scrollFunc() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ------------On hover Show dropdown Functionallity--------------

let inside_menu = document.getElementById("inside_menu");
let main_menu = document.querySelector(".main_menu_item");
// let item10 = document.querySelector(".item10");

let show = () => {
  inside_menu.style.display = "flex";
};
let show1 = () => {
  inside_menu.style.display = "flex";
  inside_menu.className = "add_on1";
};
let show2 = () => {
  inside_menu.style.display = "flex";
  // inside_menu.addStyle()
  inside_menu.className = "add_on2";
};
let show3 = () => {
  inside_menu.style.display = "flex";
  inside_menu.className = "add_on3";
};
let show4 = () => {
  inside_menu.style.display = "flex";
  inside_menu.className = "add_on4";
};
let show5 = () => {
  inside_menu.style.display = "flex";
  inside_menu.className = "add_on5";
};
let show6 = () => {
  inside_menu.style.display = "flex";
  inside_menu.className = "add_on6";
};
let show7 = () => {
  inside_menu.style.display = "flex";
  inside_menu.className = "add_on7";
};
let show8 = () => {
  inside_menu.style.display = "flex";
  inside_menu.className = "add_on8";
};
let show9 = () => {
  inside_menu.style.display = "flex";
  inside_menu.className = "add_on9";
};
let show10 = () => {
  inside_menu.style.display = "flex";
  inside_menu.className = "add_on10";
  item10.append(inside_menu);
};

let hide = () => {
  inside_menu.style.display = "none";
};
let move = () => {
  inside_menu.style.display = "flex";
};
