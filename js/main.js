document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-list__link");

  for (const link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top:
          targetElement.offsetTop - document.querySelector(".nav").offsetHeight,
        behavior: "smooth",
      });
    });
  }

  const btnDarkMode = document.querySelector(".dark-mode-btn");
  const body = document.body;

  if (localStorage.getItem("darkMode") === "dark") {
    btnDarkMode.classList.add("dark-mode-btn--active");
    body.classList.add("dark");
  } else {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    body.classList.remove("dark");
  }

  updateIcons(body.classList.contains("dark"));

  btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDarkTheme = body.classList.toggle("dark");

    if (isDarkTheme) {
      localStorage.setItem("darkMode", "dark");
    } else {
      localStorage.setItem("darkMode", "light");
    }

    updateIcons(isDarkTheme);
  };

  function updateIcons(isDarkTheme) {
    document.querySelectorAll(".dark-icon").forEach((icon) => {
      icon.style.display = isDarkTheme ? "inline" : "none";
    });
    document.querySelectorAll(".light-icon").forEach((icon) => {
      icon.style.display = isDarkTheme ? "none" : "inline";
    });
  }
});
