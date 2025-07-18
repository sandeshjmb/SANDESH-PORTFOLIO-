// script.js
const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('nav-menu');
toggle.onclick = () => {
  menu.classList.toggle('active');
};
