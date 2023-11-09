const body = document.querySelector("body");
const sidebar = body.querySelector(".sidebar");
const toggle = body.querySelector(".toggle");
const searchBtn = body.querySelector(".search-box");
const modeSwitch = body.querySelector(".toggle-switch");
const modeText = body.querySelector(".mode-text");
const nav = document.querySelector('nav');
const container = document.querySelector('.container');
const containerTitle = document.querySelector('.container-title');
console.log(sidebar);


toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");

  if( nav.matches('.close') ) {
    container.classList.add('ampliar')
    containerTitle.classList.add('ampliar');
    container.classList.remove('reducir')
    containerTitle.classList.remove('reducir');
  } else {
    container.classList.add('reducir')
    containerTitle.classList.add('reducir');
    container.classList.remove('ampliar')
    containerTitle.classList.remove('ampliar');
  }

});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});




modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if(body.classList.contains("dark")) {
    modeText.innerHTML = "Ligth Mode";
  } else {
    modeText.innerHTML = "Dark Mode";
  }

});