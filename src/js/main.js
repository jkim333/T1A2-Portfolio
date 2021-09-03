const navbarBtn = document.querySelector(".navbar__btn");
const navbarBody = document.querySelector(".navbar__body");

navbarBtn.addEventListener("click", (e) => {
  navbarBody.classList.toggle("show");

  if (navbarBtn.querySelector("i").className === "fas fa-bars") {
    navbarBtn.querySelector("i").className = "fas fa-times";
  } else {
    navbarBtn.querySelector("i").className = "fas fa-bars";
  }
});
