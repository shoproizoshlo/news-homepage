document.querySelector(".header_burger").addEventListener("click", (event) => {
  document.querySelector(".header_burger").classList.toggle("active");
  document.querySelector(".header_menu").classList.toggle("active");
  document.querySelector("body").classList.toggle("lock");
  document.querySelector("body").classList.toggle("overlay");
});
