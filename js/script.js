/** @format */

const btn = document.querySelector(".btn-send");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".form").classList.add("hidden");
  document.querySelector(".message").classList.remove("hidden");
});

function openSideBar() {
  document.getElementsByClassName("nav-links")[0].style.width = "250px";
}

function closeSideBar() {
  document.getElementsByClassName("nav-links")[0].style.width = "0px";
}
