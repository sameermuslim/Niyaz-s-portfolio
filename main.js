window.onload = function () {
  window.addEventListener("scroll", function (e) {
    if (window.pageYOffset > 100) {
      document.querySelector("header").classList.add("is-scrolling");
      document.querySelector(".a-tag").classList.add("b-tag");
      document.querySelector(".c-tag").classList.add("b-tag");
      document.querySelector(".d-tag").classList.add("b-tag");
      document.querySelector(".e-tag").classList.add("b-tag");
    } else {
      document.querySelector("header").classList.remove("is-scrolling");
      document.querySelector(".a-tag").classList.remove("b-tag");
      document.querySelector(".c-tag").classList.remove("b-tag");
      document.querySelector(".d-tag").classList.remove("b-tag");
      document.querySelector(".e-tag").classList.remove("b-tag");
    }
  });

  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");

    mobile_menu.classList.toggle("is-active");
  });
};
